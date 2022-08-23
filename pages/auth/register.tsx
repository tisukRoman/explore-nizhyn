import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { db } from '../../utils/db';
import { SignUpData } from '../../utils/types';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import RegisterForm from '../../components/RegisterForm';

const Register: NextPage = () => {
  const router = useRouter();

  const onSubmit = async (data: SignUpData) => {
    const { user, session } = await db.signUp(data);
    console.log(user, session);
    router.push('/');
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
