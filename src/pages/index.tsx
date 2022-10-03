import type { GetServerSideProps, NextPage } from 'next';
import { Post } from '@utils/types';
import { db } from '@utils/db';
import Layout from '@components/Layout';
import PostList from '@components/PostList';
import { useGetPostList } from '@hooks/useGetPostList';

type HomeProps = {
  posts: Post[];
};

const Home: NextPage<HomeProps> = (props) => {
  const [posts, error] = useGetPostList(props.posts);

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
