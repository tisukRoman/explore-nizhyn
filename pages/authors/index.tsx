import type { GetStaticProps, NextPage } from 'next';
import { Profile } from '@utils/types';
import { db } from '@utils/db';
import Layout from '@components/Layout';
import AuthorCard from '@components/AuthorCard';

type AuthorsProps = {
  authors: Profile[];
};

const Authors: NextPage<AuthorsProps> = ({ authors }) => {
  return (
    <Layout>
      <main className='pt-16 min-h-screen'>
        <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 max-w-screen-lg mx-auto'>
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
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
