import type { GetServerSideProps, NextPage } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useGetPostList } from '@hooks/useGetPostList';
import { api } from '@utils/api';
import Layout from '@components/Layout';
import PostList from '@components/PostList';
import LoadMoreButton from '@components/shared/LoadMoreButton';

const Home: NextPage = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetPostList();

  const renderPosts = () => {
    if (isLoading) {
      return <>Завантаження...</>;
    } else if (error) {
      return <div>{error.message}</div>;
    } else if (data?.pages) {
      return (
        <>
          <PostList pages={data.pages} />
          <LoadMoreButton
            onClick={() => fetchNextPage()}
            isLoading={isFetchingNextPage || !hasNextPage}
          />
        </>
      );
    }
  };
  return (
    <Layout>
      <main className='pt-16 min-h-screen'>{renderPosts()}</main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['posts'], () => api.getPostList(0));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
