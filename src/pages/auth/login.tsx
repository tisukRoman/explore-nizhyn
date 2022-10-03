import Link from 'next/link';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { useAuth } from '@hooks/useAuth';
import LoginForm from '@components/LoginForm';
import PageTitle from '@components/shared/PageTitle';
import Layout from '@components/Layout';
import { LoginData } from '@utils/types';

const Login: NextPage = () => {
  const router = useRouter();
  const { signIn } = useAuth();
  const {
    mutateAsync: login,
    isLoading,
    isError,
    error,
  } = useMutation(['login'], (data: LoginData) => signIn(data));

  const onSubmit = async (data: LoginData) => {
    await login(data);
    if (isError) {
      alert((error as Error).message || 'Не вийшло зайти');
    } else {
      router.push('/');
    }
  };

  return (
    <Layout>
      <main className='pt-32 h-[90vh] w-[80%] mx-auto text-center'>
        <PageTitle>Увійдіть в акаунт</PageTitle>
        <LoginForm onSubmit={onSubmit} isLoading={isLoading} />
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
