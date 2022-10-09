import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '@components/Layout';
import RegisterForm from '@components/RegisterForm';
import PageTitle from '@components/shared/PageTitle';

const Register: NextPage = () => {
  return (
    <Layout>
      <main className='pt-32 w-[80%] mx-auto text-center'>
        <PageTitle>Реєстреція</PageTitle>
        <RegisterForm />
        <div className='text-white mt-48'>Уже маєте акаунт? </div>
        <Link href='/auth/login'>
          <a className='text-red-600 font-bold text-lg block mt-4'>Увійдіть</a>
        </Link>
      </main>
    </Layout>
  );
};

export default Register;
