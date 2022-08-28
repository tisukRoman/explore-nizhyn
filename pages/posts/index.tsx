import type { GetServerSideProps, NextPage } from 'next';
import CardsList from '../../components/CardsList';
import Header from '../../components/Header';
import { db } from '../../utils/db';
import { Post } from '../../utils/types';

type PostsProps = {
  posts: Post[];
};

const Posts: NextPage<PostsProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <main className='pt-16 min-h-screen'>
        <CardsList posts={posts} />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const posts: Post[] = await db.getAuthorPosts(query.author as string);
  return {
    props: { posts },
  };
};

export default Posts;
