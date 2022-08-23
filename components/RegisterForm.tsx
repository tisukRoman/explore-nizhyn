import { FC } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { AuthData } from '../utils/types';
import TextInput from './TextInput';
import Button from './Button';

const schema = yup.object({
  email: yup.string().required('Email required').email('Wrong email format'),
  password: yup
    .string()
    .required('Password required')
    .min(6, 'Minimum 6 characters'),
  username: yup
    .string()
    .required('User Name required')
    .min(6, 'Minimum 6 characters'),
  avatar_url: yup.string().url('Must be url'),
});

type RegisterProps = {
  onSubmit: (data: AuthData) => void;
};

const RegisterForm: FC<RegisterProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthData>({ mode: 'onBlur', resolver: yupResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='block w-full h-80 mx-auto md:max-w-screen-sm'
    >
      <TextInput
        type='email'
        {...register('email')}
        placeholder='Enter email...'
        has_error={errors.email ? 1 : 0}
        error_text={errors.email?.message}
      />
      <TextInput
        type='password'
        {...register('password')}
        placeholder='Enter password...'
        has_error={errors.password ? 1 : 0}
        error_text={errors.password?.message}
      />
      <TextInput
        type='text'
        {...register('username')}
        placeholder='Enter user name...'
        has_error={errors.username ? 1 : 0}
        error_text={errors.username?.message}
      />
      <TextInput
        type='text'
        {...register('avatar_url')}
        placeholder='Enter avatar url (optional)...'
        has_error={errors.avatar_url ? 1 : 0}
        error_text={errors.avatar_url?.message}
      />
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default RegisterForm;
