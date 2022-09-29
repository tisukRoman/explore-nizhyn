import type { GetStaticProps, NextPage } from 'next';
import { Profile } from '@utils/types';
import { db } from '@utils/db';
import Layout from '@components/Layout';
import AuthorList from '@components/AuthorList';

type AuthorsProps = {
  authors: Profile[];
};

const Authors: NextPage<AuthorsProps> = ({ authors }) => {
  return (
    <Layout>
      <main className='pt-16 min-h-screen'>
        <AuthorList authors={authors} />
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const authors = await db.getAuthorsList();
  return {
    props: { authors },
  };
};

export default Authors;
