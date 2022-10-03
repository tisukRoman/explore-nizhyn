import { FC } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { LoginData } from '@utils/types';
import TextInput from './shared/TextInput';
import Button from './shared/Button';

const schema = yup.object({
  email: yup.string().required(`Обов'язкове поле`).email('Неправильний формат'),
  password: yup
    .string()
    .required(`Обов'язкове поле`)
    .min(6, 'Мінімум 6 символів'),
});

type LoginProps = {
  onSubmit: (data: LoginData) => void;
  isLoading: boolean;
};

const LoginForm: FC<LoginProps> = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ mode: 'onBlur', resolver: yupResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full h-80 mx-auto md:max-w-screen-sm'
    >
      <TextInput
        type='email'
        {...register('email')}
        placeholder='Введіть email...'
        disabled={isLoading}
        has_error={errors.email ? 1 : 0}
        error_text={errors.email?.message}
      />
      <TextInput
        type='password'
        {...register('password')}
        placeholder='Введіть пароль...'
        disabled={isLoading}
        has_error={errors.password ? 1 : 0}
        error_text={errors.password?.message}
      />
      <Button type='submit' disabled={isLoading}>
        {isLoading ? 'Зачекайте...' : 'Увійти'}
      </Button>
    </form>
  );
};

export default LoginForm;
