import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { db } from '../../utils/db';
import { LoginData } from '../../utils/types';
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
        <PageTitle>Login</PageTitle>
        <LoginForm onSubmit={onSubmit} />
        <p className='text-white mt-6'>{`Don't`} have account? </p>
        <Link href='/auth/register'>
          <a className='text-red-600 font-bold text-lg block mt-4'>Sign Up</a>
        </Link>
      </main>
    </>
  );
};

export default Login;
