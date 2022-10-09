import { GetServerSideProps, NextPage } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useGetAuthorPosts } from '@hooks/useGetAuthorPosts';
import { useGetProfile } from '@hooks/useGetProfile';
import AuthorCover from '@components/AuthorCover';
import PostList from '@components/PostList';
import Layout from '@components/Layout';
import { api } from '@utils/api';

const AuthorPage: NextPage = () => {
  const { data: profile, isLoading, error } = useGetProfile();
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGetAuthorPosts();

  const renderAuthorCover = () => {
    if (profile) {
      return <AuthorCover profile={profile} />;
    } else if (error) {
      return <div>Помилка</div>;
    } else {
      return <div>Завантаження...</div>;
    }
  };

  const renderPosts = () => {
    if (isLoading) {
      return <>Завантаження...</>;
    } else if (error) {
      return <div>{(error as Error).message}</div>;
    } else if (data?.pages) {
      return (
        <>
          <PostList pages={data.pages} />
          <div
            onClick={() => fetchNextPage()}
            className='bg-[#000] w-full h-18 p-8 text-white text-2xl text-center cursor-pointer hover-green flex justify-center items-center'
          >
            {isFetchingNextPage || !hasNextPage ? (
              'Завантаження...'
            ) : (
              <>
                Завантажити ще пости
                <AiOutlineArrowDown className='ml-4' />
              </>
            )}
          </div>
        </>
      );
    }
  };

  return (
    <Layout>
      <main className='pt-16 min-h-screen'>
        {renderAuthorCover()}
        {renderPosts()}
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const authorId = ctx.params?.id as string;

  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery(['profile', authorId], () =>
      api.getProfile(authorId)
    ),
    queryClient.prefetchQuery(['posts', { author: authorId }], () =>
      api.getAuthorPosts(authorId, 0)
    ),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default AuthorPage;
