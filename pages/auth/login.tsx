import Link from 'next/link';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { LoginData } from '../../utils/types';
import { db } from '../../utils/db';
import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';
import PageTitle from '../../components/PageTitle';

const Login: NextPage = () => {
  const router = useRouter();

  const onSubmit = async (data: LoginData) => {
    const user = await db.login(data);
    console.log(user);
    router.push('/');
  };

  return (
    <>
      <Header />
      <main className='pt-32 w-[80%] mx-auto text-center'>
        <PageTitle>Увійдіть в акаунт</PageTitle>
        <LoginForm onSubmit={onSubmit} />
        <p className='text-white mt-6'>Не маєте акаунту? </p>
        <Link href='/auth/register'>
          <a className='text-red-600 font-bold text-lg block mt-4'>Створіть акаунт</a>
        </Link>
      </main>
    </>
  );
};

export default Login;
