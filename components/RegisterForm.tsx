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

const schema = yup.object({
  email: yup.string().required('Email required').email('Wrong email format'),
  password: yup
    .string()
    .required('Password required')
    .min(6, 'Minimum 6 characters'),
});

type RegisterProps = {
  onSubmit: (data: FormValues) => void;
};

const RegisterForm: FC<RegisterProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onBlur', resolver: yupResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full h-80 mx-auto md:max-w-screen-sm'
    >
      <TextInput
        type='email'
        {...register('email')}
        placeholder='Enter email...'
        has_error={!!errors.email}
        error_text={errors.email?.message}
      />
      <TextInput
        type='password'
        {...register('password')}
        placeholder='Enter password...'
        has_error={!!errors.password}
        error_text={errors.password?.message}
      />
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default RegisterForm;
