import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useGetSearchedPosts } from '@hooks/useGetSearchedPosts';
import LoadMoreButton from '@components/shared/LoadMoreButton';
import PostList from '@components/PostList';
import Layout from '@components/Layout';
import { api } from '@utils/api';

const SearchPosts = () => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetSearchedPosts();

  const renderPosts = () => {
    if (isLoading) {
      return <>Завантаження...</>;
    } else if (error) {
      return <div>{error.message}</div>;
    } else if (data?.pages && data.pages[0].length) {
      return (
        <>
          <PostList pages={data.pages} />
          <LoadMoreButton
            onClick={() => fetchNextPage()}
            isLoading={isFetchingNextPage || !hasNextPage}
          />
        </>
      );
    } else {
      return (
        <div className='text-white text-2xl text-center m-12'>
          Не знайдено...
        </div>
      );
    }
  };
  return (
    <Layout>
      <main className='pt-16 min-h-screen'>{renderPosts()}</main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const temp = (ctx.query.q || '') as string;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['posts', 'search', temp], () =>
    api.getSearchedPostList(temp, 0)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default SearchPosts;
