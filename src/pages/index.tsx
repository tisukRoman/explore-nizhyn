import type { GetServerSideProps, NextPage } from 'next';
import { db } from '@utils/db';
import Layout from '@components/Layout';
import PostList from '@components/PostList';
import { useGetPostList } from '@hooks/useGetPostList';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { Fragment } from 'react';

const Home: NextPage = () => {
  const { data, error, isLoading, fetchNextPage } = useGetPostList();

  const renderPosts = () => {
    if (isLoading) {
      return <>Load...</>;
    } else if (error) {
      return <div>{(error as Error).message}</div>;
    } else if (data?.pages) {
      return (
        <>
          {data.pages.map((posts, i) => (
            <Fragment key={i}>
              <PostList posts={posts} />
            </Fragment>
          ))}
          <button onClick={() => fetchNextPage()}>load more</button>
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

export const getPosts = async (searchQuery?: string) => {
  return searchQuery
    ? await db.getSearchedPostList(searchQuery as string)
    : await db.getPostList(0);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const searchQuery = ctx.query.q as string | undefined;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['posts'], () => getPosts(searchQuery));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
