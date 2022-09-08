import { GetServerSideProps, NextPage } from 'next';
import AuthorCover from '@components/AuthorCover';
import CardsList from '@components/CardsList';
import Layout from '@components/Layout';
import { Post, Profile } from '@utils/types';
import { db } from '@utils/db';

type AuthorPageProps = {
  posts: Post[];
  profile: Profile;
};

const AuthorPage: NextPage<AuthorPageProps> = ({ posts, profile }) => {
  return (
    <Layout>
      <AuthorCover profile={profile} />
      <main className='pt-16 min-h-screen'>
        <CardsList posts={posts} />
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const author_id = ctx.params?.id;
  const [posts, profile] = await Promise.all([
    db.getAuthorPosts(author_id as string),
    db.getProfile(author_id as string),
  ]);

  return {
    props: { posts, profile },
  };
};

export default AuthorPage;
