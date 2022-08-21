import type { NextPage } from 'next';
import CardsList from '../components/CardsList';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className='bg-black'>
      <Header />
      <main className='pt-16 min-h-screen'>
        <CardsList />
      </main>
    </div>
  );
};

export default Home;
