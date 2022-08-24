import { GetServerSideProps, NextPage } from 'next';
import { Post } from '../../utils/types';
import { db } from '../../utils/db';
import Header from '../../components/Header';

const PostDetails: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <>
      <Header />
      <main>
        <h2>{post.title}</h2>
        <article>{post.content}</article>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const post_id = ctx.params?.id;

  if (!post_id) {
    return {
      props: {},
    };
  }

  const post = await db.getPostDetails(Number(post_id));
  return {
    props: { post },
  };
};

export default PostDetails;
