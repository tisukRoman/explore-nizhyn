import { FC } from 'react';
import { Profile } from '@utils/types';
import AuthorCard from './AuthorCard';

type AuthorListProps = {
  authors: Profile[];
};

export const AuthorList: FC<AuthorListProps> = ({ authors }) => {
  return (
    <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 max-w-screen-lg mx-auto'>
      {authors.map((author, i) => (
        <AuthorCard key={author.id} author={author} index={i} />
      ))}
    </div>
  );
};
