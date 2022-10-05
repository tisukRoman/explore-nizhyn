import { GetServerSideProps, NextPage } from 'next';
import AuthorCover from '@components/AuthorCover';
import PostList from '@components/PostList';
import Layout from '@components/Layout';
import { db } from '@utils/db';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useGetAuthor } from '@hooks/useGetAuthor';
import { useRouter } from 'next/router';

const AuthorPage: NextPage = () => {
  const router = useRouter();
  const authorId = router.query?.id as string;
  const [data, isFetching, error] = useGetAuthor(authorId);

  const renderAuthorPage = () => {
    if (data) {
      return (
        <>
          <AuthorCover profile={data.profile} />
          <main className='pt-16 min-h-screen'>
            {isFetching ? (
              <div className='text-white text-center'>Зачекайте... </div>
            ) : (
              <PostList posts={data.posts} />
            )}
          </main>
        </>
      );
    } else if (error) {
      return <div>Помилка</div>;
    } else {
      return <div className='text-white'>Зачекайте...</div>;
    }
  };

  return <Layout>{renderAuthorPage()}</Layout>;
};

const getAuthor = async (author_id: string) => {
  const [posts, profile] = await Promise.all([
    db.getAuthorPosts(author_id),
    db.getProfile(author_id),
  ]);
  return { posts, profile };
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const author_id = ctx.params?.id as string;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['authors', author_id], () =>
    getAuthor(author_id)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default AuthorPage;
