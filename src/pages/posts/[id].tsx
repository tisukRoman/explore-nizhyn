import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useGetPost } from '@hooks/useGetPost';
import { db } from '@utils/db';
import Layout from '@components/Layout';
import PostCover from '@components/PostCover';
import TextViewer from '@components/TextViewer';
import Button from '@components/shared/Button';
import { BiArrowBack } from 'react-icons/bi';

const PostDetails: NextPage = () => {
  const router = useRouter();
  const postID = router.query?.id as string;
  const [post, error] = useGetPost(postID);

  const goBack = () => {
    router.back();
  };

  const renderPost = () => {
    if (post) {
      return (
        <>
          <PostCover post={post} />
          <article className='text-slate-200 p-6'>
            <TextViewer>
              {post.content ? post.content : <p>No content...</p>}
            </TextViewer>
            <Button onClick={goBack}>
              <BiArrowBack className='inline' /> Назад
            </Button>
          </article>
        </>
      );
    } else if (error) {
      return <div>{error.message}</div>;
    } else {
      return <div>Loader...</div>;
    }
  };

  return (
    <Layout>
      <main className='pt-20 mx-auto lg:max-w-screen-lg shadow-xl shadow-[#1a1a1a]'>
        {renderPost()}
      </main>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await db.getPostList();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['post', id], () =>
    db.getPostDetails(Number(id))
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default PostDetails;
