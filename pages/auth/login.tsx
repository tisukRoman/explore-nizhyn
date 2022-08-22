import { NextPage } from 'next';
import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';
import PageTitle from '../../components/PageTitle';

const Login: NextPage = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <main className='pt-32 w-[80%] mx-auto text-center'>
        <PageTitle>Login</PageTitle>
        <LoginForm onSubmit={onSubmit} />
      </main>
    </>
  );
};

export default Login;
