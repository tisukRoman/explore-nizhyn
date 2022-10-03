import type { GetServerSideProps, NextPage } from 'next';
import { db } from '@utils/db';
import Layout from '@components/Layout';
import PostList from '@components/PostList';
import { useGetPostList } from '@hooks/useGetPostList';
import { dehydrate, QueryClient } from '@tanstack/react-query';

const Home: NextPage = () => {
  const [posts, error] = useGetPostList();

  const renderPosts = () => {
    if (posts) {
      return <PostList posts={posts} />;
    } else if (error) {
      return <div>{error.message}</div>;
    } else {
      return <div>Зачекайте...</div>;
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
    : await db.getPostList();
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
