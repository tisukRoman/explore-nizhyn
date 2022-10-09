import Link from 'next/link';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { useLogin } from '@hooks/useLogin';
import { LoginData } from '@utils/types';
import LoginForm from '@components/LoginForm';
import PageTitle from '@components/shared/PageTitle';
import Layout from '@components/Layout';

const Login: NextPage = () => {
  const { mutateAsync: login, isLoading, error } = useLogin();

  const onSubmit = async (data: LoginData) => {
    await login(data);
  };

  const renderError = () => {
    return (
      error && (
        <motion.div
          initial={{ opacity: 0, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
          className='my-8 text-red-600 text-lg font-bold'
        >
          Неправильний логін чи пароль
        </motion.div>
      )
    );
  };

  return (
    <Layout>
      <main className='pt-32 h-[90vh] w-[80%] mx-auto text-center'>
        <>
          <PageTitle>Увійдіть в акаунт</PageTitle>
          {renderError()}
          <LoginForm onSubmit={onSubmit} isLoading={isLoading} />
          <p className='text-white mt-6'>Не маєте акаунту? </p>
          <Link href='/auth/register'>
            <a className='text-red-600 font-bold text-lg block mt-4'>
              Створіть акаунт
            </a>
          </Link>
        </>
      </main>
    </Layout>
  );
};

export default Login;
