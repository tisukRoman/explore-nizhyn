import { FC, ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';

type LayoutProps = {
  title?: string;
  description?: string;
  keywords?: string;
  children: ReactNode;
};

const Layout: FC<LayoutProps> = (props) => {
  const { title, description, keywords, children } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      </Head>
      <div>
        <Header />
        {children}
      </div>
    </>
  );
};

Layout.defaultProps = {
  title: 'Досліджуй Ніжин',
  description: 'Читай цікаві дописи про місто Ніжин',
  keywords: `Ніжин, блог, історія, пам'ятки`,
};

export default Layout;
