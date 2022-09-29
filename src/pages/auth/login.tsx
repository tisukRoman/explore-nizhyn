import Link from 'next/link';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { LoginData } from '@utils/types';
import { useAuth } from '@hooks/useAuth';
import LoginForm from '@components/LoginForm';
import PageTitle from '@components/shared/PageTitle';
import Layout from '@components/Layout';

const Login: NextPage = () => {
  const router = useRouter();
  const { signIn } = useAuth();

  const onSubmit = async (data: LoginData) => {
    await signIn(data);
    router.push('/');
  };

  return (
    <Layout>
      <main className='pt-32 h-[90vh] w-[80%] mx-auto text-center'>
        <PageTitle>Увійдіть в акаунт</PageTitle>
        <LoginForm onSubmit={onSubmit} />
        <p className='text-white mt-6'>Не маєте акаунту? </p>
        <Link href='/auth/register'>
          <a className='text-red-600 font-bold text-lg block mt-4'>
            Створіть акаунт
          </a>
        </Link>
      </main>
    </Layout>
  );
};

export default Login;
