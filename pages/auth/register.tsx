import Link from 'next/link';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { SignUpData } from '../../utils/types';
import { db } from '../../utils/db';
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
        <PageTitle>Реєстреція</PageTitle>
        <RegisterForm onSubmit={onSubmit} />
        <div className='text-white mt-48'>Уже маєте акаунт? </div>
        <Link href='/auth/login'>
          <a className='text-red-600 font-bold text-lg block mt-4'>Увійдіть</a>
        </Link>{' '}
      </main>
    </>
  );
};

export default Register;
