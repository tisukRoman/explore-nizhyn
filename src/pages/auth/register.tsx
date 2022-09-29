import Link from 'next/link';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { SignUpData } from '@utils/types';
import { useAuth } from '@hooks/useAuth';
import Layout from '@components/Layout';
import PageTitle from '@components/shared/PageTitle';
import RegisterForm from '@components/RegisterForm';

const Register: NextPage = () => {
  const router = useRouter();
  const { signUp } = useAuth();

  const onSubmit = async (data: SignUpData) => {
    await signUp(data);
    router.push('/');
  };

  return (
    <Layout>
      <main className='pt-32 w-[80%] mx-auto text-center'>
        <PageTitle>Реєстреція</PageTitle>
        <RegisterForm onSubmit={onSubmit} />
        <div className='text-white mt-48'>Уже маєте акаунт? </div>
        <Link href='/auth/login'>
          <a className='text-red-600 font-bold text-lg block mt-4'>Увійдіть</a>
        </Link>{' '}
      </main>
    </Layout>
  );
};

export default Register;
