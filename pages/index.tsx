import type { GetStaticProps, NextPage } from 'next';
import { Post } from '../utils/types';
import { db } from '../utils/db';
import Header from '../components/Header';
import CardsList from '../components/CardsList';

type HomeProps = {
  posts: Post[];
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <main className='pt-16 min-h-screen'>
        <CardsList posts={posts} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await db.getPostList();
  return {
    props: { posts },
  };
};

export default Home;
