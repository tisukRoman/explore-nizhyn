import { FC } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import TextInput from './TextInput';
import Button from './Button';

type FormValues = {
  email: string;
  password: string;
};

const loginSchema = yup.object({
  email: yup.string().required('Required'),
  password: yup.string().required('Required'),
});

type LoginProps = {
  onSubmit: (data: any) => void;
};

const LoginForm: FC<LoginProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(loginSchema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full h-80'>
      <TextInput
        {...register('email')}
        type='email'
        placeholder='Enter email...'
      />
      <TextInput
        {...register('password')}
        type='password'
        placeholder='Enter password...'
      />
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default LoginForm;
