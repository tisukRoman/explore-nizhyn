import type { GetServerSideProps, NextPage } from 'next';
import { Post } from '@utils/types';
import { db } from '@utils/db';
import Layout from '@components/Layout';
import PostList from '@components/PostList';

type HomeProps = {
  posts: Post[];
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <Layout>
      <main className='pt-16 min-h-screen'>
        <PostList posts={posts} />
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const searchQuery = ctx.query.q;
  let posts: Post[] = searchQuery
    ? await db.getSearchedPostList(searchQuery as string)
    : await db.getPostList();

  return {
    props: { posts },
  };
};

export default Home;
