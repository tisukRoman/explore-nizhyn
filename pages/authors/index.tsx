import type { GetStaticProps, NextPage } from 'next';
import { Profile } from '../../utils/types';
import { db } from '../../utils/db';
import Header from '../../components/Header';

type AuthorsProps = {
  authors: Profile[];
};

const Authors: NextPage<AuthorsProps> = ({ authors }) => {    
  return (
    <>
      <Header />
      <main className='pt-16 min-h-screen'>
        <div className='p-6 grid grid-cols-1 gap-y-10 max-w-screen-2xl mx-auto'>
          {authors.map((author) => (
            <div key={author.id} className='w-full h-40'>
              {JSON.stringify(author)}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const authors = await db.getAuthorsList();
  return {
    props: { authors },
  };
};

export default Authors;
