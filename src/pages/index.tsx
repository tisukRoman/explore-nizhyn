import type { GetServerSideProps, NextPage } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useGetPostList } from '@hooks/useGetPostList';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { api } from '@utils/api';
import Layout from '@components/Layout';
import PostList from '@components/PostList';

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
          <div
            onClick={() => fetchNextPage()}
            className='bg-[#000] w-full h-18 p-8 text-white text-2xl text-center cursor-pointer hover-green flex justify-center items-center'
          >
            {isFetchingNextPage || !hasNextPage ? (
              'Завантаження...'
            ) : (
              <>
                Завантажити ще пости
                <AiOutlineArrowDown className='ml-4' />
              </>
            )}
          </div>
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
