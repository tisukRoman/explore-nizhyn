import type { GetStaticProps, NextPage } from 'next';
import { db } from '../utils/db';
import { Post } from '../utils/types';
import Header from '../components/Header';
import CardsList from '../components/CardsList';

export const getStaticProps: GetStaticProps = async () => {
  const { data: posts, error } = await db
    .posts()
    .select('id, title, img_src, tag, author')
    .eq('published', true);

  if (error) {
    throw new Error(error.message);
  }

  return {
    props: { posts },
  };
};

type HomeProps = {
  posts: Post[];
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div className='bg-black'>
      <Header />
      <main className='pt-16 min-h-screen'>
        <CardsList posts={posts}/>
      </main>
    </div>
  );
};

export default Home;
