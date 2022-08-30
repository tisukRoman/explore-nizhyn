import Link from 'next/link';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { db } from '../../utils/db';
import { LoginData } from '../../utils/types';
import Layout from '../../components/Layout';
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
