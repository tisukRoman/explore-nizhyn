import type { GetServerSideProps, NextPage } from 'next';
import { Post } from '@utils/types';
import { db } from '@utils/db';
import Layout from '@components/Layout';
import CardsList from '@components/CardsList';

type HomeProps = {
  posts: Post[];
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <Layout>
      <main className='pt-16 min-h-screen'>
        <CardsList posts={posts} />
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const searchQuery = ctx.query.q;

  let posts: Post[] = [];

  if (searchQuery) {
    posts = await db.getSearchedPostList(searchQuery as string);
  } else {
    posts = await db.getPostList();
  }

  console.log(searchQuery);
  

  return {
    props: { posts },
  };
};

export default Home;
