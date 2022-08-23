import { NextPage } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import RegisterForm from '../../components/RegisterForm';

type FormValues = {
  email: string;
  password: string;
};

const Register: NextPage = () => {
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <main className='pt-32 w-[80%] mx-auto text-center'>
        <PageTitle>Sign Up</PageTitle>
        <RegisterForm onSubmit={onSubmit} />
        <div className='text-white mt-48'>Already have account? </div>
        <Link href='/auth/login'>
          <a className='text-red-600 font-bold text-lg block mt-4'>Login</a>
        </Link>{' '}
      </main>
    </>
  );
};

export default Register;
