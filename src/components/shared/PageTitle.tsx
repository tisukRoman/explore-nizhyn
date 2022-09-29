import { FC, ReactNode } from 'react';

type PageTitleProps = {
  children: ReactNode;
};

const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return <h1 className='text-slate-200 font-bold text-3xl'>{children}</h1>;
};

export default PageTitle;
