import type { NextPage } from 'next';
import CardsList from '../components/CardsList';

const Home: NextPage = () => {
  return (
    <div className='bg-black min-h-screen'>
      <CardsList />
    </div>
  );
};

export default Home;
