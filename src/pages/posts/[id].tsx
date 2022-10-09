import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { api } from '@utils/api';
import { useGetPost } from '@hooks/useGetPost';
import Layout from '@components/Layout';
import Button from '@components/shared/Button';
import PostCover from '@components/PostCover';
import TextViewer from '@components/TextViewer';
import CommentList from '@components/CommentList';
import { BiArrowBack } from 'react-icons/bi';
import { withCSR } from 'hoc/withCSR';

const PostDetails: NextPage = () => {
  const router = useRouter();
  const [post, isPostFetching, postError] = useGetPost();

  const goBack = () => {
    router.back();
  };

  const renderPost = () => {
    if (post) {
      return (
        <>
          <PostCover post={post} />
          <article className='text-slate-200 p-2 md:p-6'>
            {!post.content || isPostFetching ? (
              <p>Завантаження...</p>
            ) : (
              <motion.div
                initial={{ opacity: 0, translateY: -50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5 }}
              >
                <TextViewer>{post.content}</TextViewer>
              </motion.div>
            )}
            <Button onClick={goBack}>
              <BiArrowBack className='inline' /> Назад
            </Button>
          </article>
        </>
      );
    } else if (postError) {
      return <div>{postError.message}</div>;
    } else {
      return <div>Завантаження...</div>;
    }
  };

  return (
    <Layout>
      <main className='pt-20 mx-auto lg:max-w-screen-lg shadow-xl shadow-[#1a1a1a]'>
        <>
          {renderPost()}
          <CommentList />
        </>
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = withCSR(
  async (ctx: any) => {
    const id = ctx.params.id as string;
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(['post', id], () =>
      api.getPostDetails(Number(id))
    );
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  }
);

export default PostDetails;
