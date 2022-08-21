import { FC } from 'react';
import { Post } from '../utils/types';
import Card from './Card';

type CardsListProps = {
  posts: Post[];
};

const CardsList: FC<CardsListProps> = ({ posts }) => {
  return (
    <div className='p-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 max-w-screen-2xl mx-auto'>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default CardsList;
