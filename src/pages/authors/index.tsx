import type { GetStaticProps, NextPage } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useGetAuthorList } from '@hooks/useGetAuthorList';
import { db } from '@utils/db';
import Layout from '@components/Layout';
import AuthorList from '@components/AuthorList';

const Authors: NextPage = () => {
  const [authors, error] = useGetAuthorList();

  const renderAuthorList = () => {
    if (authors) {
      return <AuthorList authors={authors} />;
    } else if (error) {
      return <div>Помилка</div>;
    } else {
      return <div>Зачекайте...</div>;
    }
  };

  return (
    <Layout>
      <main className='pt-16 min-h-screen'>{renderAuthorList()}</main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['authors'], db.getAuthorsList);
  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};

export default Authors;
