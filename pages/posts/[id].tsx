import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import { Post } from '@utils/types';
import { db } from '@utils/db';
import Layout from '@components/Layout';
import PostCover from '@components/PostCover';
import TextViewer from '@components/TextViewer';
import Button from '@components/Button';
import { BiArrowBack } from 'react-icons/bi';

type PostDetailsProps = {
  post: Post;
};

const PostDetails: NextPage<PostDetailsProps> = ({ post }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <Layout>
      <main className='pt-20 mx-auto lg:max-w-screen-lg shadow-xl shadow-[#1a1a1a]'>
        <PostCover post={post} />
        <article className='text-slate-200 p-6'>
          <TextViewer>
            {post.content ? post.content : <p>No content...</p>}
          </TextViewer>
          <Button onClick={goBack}>
            <BiArrowBack className='inline' /> Назад
          </Button>
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
