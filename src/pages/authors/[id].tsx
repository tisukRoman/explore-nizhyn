import { GetServerSideProps, NextPage } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useGetAuthorPosts } from '@hooks/useGetAuthorPosts';
import { useGetProfile } from '@hooks/useGetProfile';
import LoadMoreButton from '@components/shared/LoadMoreButton';
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
          <LoadMoreButton
            onClick={() => fetchNextPage()}
            isLoading={isFetchingNextPage}
            isListEnd={!hasNextPage}
            disabled={isFetchingNextPage || !hasNextPage}
          />
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
