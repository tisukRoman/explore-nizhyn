import type { GetStaticProps, NextPage } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useGetAuthorList } from '@hooks/useGetAuthorList';
import { api } from '@utils/api';
import Layout from '@components/Layout';
import AuthorList from '@components/AuthorList';

const Authors: NextPage = () => {
  const { data: authors, error } = useGetAuthorList();

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
  await queryClient.prefetchQuery(['authors'], api.getAuthorsList);
  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};

export default Authors;
