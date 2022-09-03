import { GetServerSideProps, NextPage } from 'next';
import { Comment, Post } from '@utils/types';
import { db } from '@utils/db';
import CommentList from '@components/CommentList';
import PostCover from '@components/PostCover';
import Layout from '@components/Layout';
import TextViewer from '@components/TextViewer';

type PostDetailsProps = {
  post: Post;
  comments: Comment[];
};

const PostDetails: NextPage<PostDetailsProps> = ({ post, comments }) => {
  return (
    <Layout>
      <main className='pt-20 mx-auto lg:max-w-screen-lg shadow-xl shadow-[#1a1a1a]'>
        <PostCover post={post} />
        <article className='text-slate-200 p-6'>
          <TextViewer>
            {post.content ? post.content : <p>No content...</p>}
          </TextViewer>
        </article>
        <CommentList comments={comments} />
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const post_id = ctx.params?.id;

  if (!post_id) {
    return {
      props: {},
    };
  }

  const [post, comments] = await Promise.all([
    db.getPostDetails(Number(post_id)),
    db.getPostComments(Number(post_id)),
  ]);

  return {
    props: { post, comments },
  };
};

export default PostDetails;
