import { FC } from 'react';
import Card from './Card';

type CardsListProps = {};

const posts = [
  { id: 1, title: 'Nizhyn City', description: 'nksdjd sdkho siqweui uesoejpi' },
];

const CardsList: FC<CardsListProps> = () => {
  return (
    <div className='p-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 max-w-screen-2xl mx-auto'>
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((post, i) => (
        <Card key={i} />
      ))}
    </div>
  );
};

export default CardsList;
