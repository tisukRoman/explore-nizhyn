import { NextPage } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';
import PageTitle from '../../components/PageTitle';

type FormValues = {
  email: string;
  password: string;
};

const Login: NextPage = () => {
  const onSubmit = (data: FormValues) => {
    console.log(data);
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
