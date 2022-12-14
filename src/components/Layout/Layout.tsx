import { FC, ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { useIsFetching } from '@tanstack/react-query';

type LayoutProps = {
  title?: string;
  description?: string;
  keywords?: string;
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = (props) => {
  const { title, description, keywords, children } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <div className='grow'>{children}</div>
        <Footer />
      </div>
    </>
  );
};

Layout.defaultProps = {
  title: 'Досліджуй Ніжин',
  description: 'Читай цікаві дописи про місто Ніжин',
  keywords: `Ніжин, блог, історія, пам'ятки`,
};
