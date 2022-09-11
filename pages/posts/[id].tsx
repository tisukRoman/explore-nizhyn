import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Comment, Post } from '@utils/types';
import { db } from '@utils/db';
import CommentList from '@components/CommentList';
import PostCover from '@components/PostCover';
import Layout from '@components/Layout';
import TextViewer from '@components/TextViewer';
import { ParsedUrlQuery } from 'querystring';

type PostDetailsProps = {
  post: Post;
};

const PostDetails: NextPage<PostDetailsProps> = ({ post }) => {
  return (
    <Layout>
      <main className='pt-20 mx-auto lg:max-w-screen-lg shadow-xl shadow-[#1a1a1a]'>
        <PostCover post={post} />
        <article className='text-slate-200 p-6'>
          <TextViewer>
            {post.content ? post.content : <p>No content...</p>}
          </TextViewer>
        </article>
      </main>
    </Layout>
  );
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await db.getPostList();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as Params;
  const post = await db.getPostDetails(Number(id));
  return {
    props: { post },
  };
};

export default PostDetails;
