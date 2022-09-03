import { GetServerSideProps, NextPage } from 'next';
import { Comment, Post } from '@utils/types';
import parseHtml from 'html-react-parser';
import CommentList from '@components/CommentList';
import PostCover from '@components/PostCover';
import Layout from '@components/Layout';
import { db } from '@utils/db';

type PostDetailsProps = {
  post: Post;
  comments: Comment[];
};

const PostDetails: NextPage<PostDetailsProps> = ({ post, comments }) => {
  return (
    <Layout>
      <main className='pt-20 mx-auto lg:max-w-screen-lg shadow-xl shadow-[#1a1a1a]'>
        <PostCover post={post} />
        <article className='text-slate-300 text-lg px-8 py-12 font-mono md:text-2xl'>
          <p className='leading-8 md:leading-10'>
            {parseHtml(JSON.parse(post.content as string))}
          </p>
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
