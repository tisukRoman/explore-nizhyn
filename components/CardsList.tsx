import { FC } from 'react';
import Card from './Card';

type CardsListProps = {};

const posts = [
  { id: 1, title: 'Nizhyn City', description: 'nksdjd sdkho siqweui uesoejpi' },
];

const CardsList: FC<CardsListProps> = () => {
  return (
    <div className='p-8 flex flex-wrap justify-between max-w-screen-2xl mx-auto'>
      {[0, 0, 0].map((post, i) => (
        <Card key={i} />
      ))}
    </div>
  );
};

export default CardsList;
