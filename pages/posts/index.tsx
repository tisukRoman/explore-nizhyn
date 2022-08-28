import type { GetServerSideProps, NextPage } from 'next';
import CardsList from '../../components/CardsList';
import Layout from '../../components/Layout';
import { Post } from '../../utils/types';
import { db } from '../../utils/db';

type PostsProps = {
  posts: Post[];
};

const Posts: NextPage<PostsProps> = ({ posts }) => {
  return (
    <Layout>
      <main className='pt-16 min-h-screen'>
        <CardsList posts={posts} />
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const posts: Post[] = await db.getAuthorPosts(query.author as string);
  return {
    props: { posts },
  };
};

export default Posts;
