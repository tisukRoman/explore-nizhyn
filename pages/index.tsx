import type { GetStaticProps, NextPage } from 'next';
import { db } from '../utils/db';
import { Post } from '../utils/types';
import Header from '../components/Header';
import CardsList from '../components/CardsList';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await db.getPostList();
  return {
    props: { posts },
  };
};

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

export default Home;
