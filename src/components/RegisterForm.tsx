import { FC } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { SignUpData } from '@utils/types';
import TextInput from './shared/TextInput';
import Button from './shared/Button';

const schema = yup.object({
  email: yup.string().required(`Обов'язкове поле`).email('Неправильний формат'),
  password: yup
    .string()
    .required(`Обов'язкове поле`)
    .min(6, 'Мінімум 6 символів'),
  username: yup
    .string()
    .required(`Обов'язкове поле`)
    .min(6, 'Мінімум 6 символів'),
  avatar_url: yup.string().url('Має бути посилання'),
});

type RegisterProps = {
  onSubmit: (data: SignUpData) => void;
};

const RegisterForm: FC<RegisterProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({ mode: 'onBlur', resolver: yupResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='block w-full h-80 mx-auto md:max-w-screen-sm'
    >
      <TextInput
        type='email'
        {...register('email')}
        placeholder='Введіть email...'
        has_error={errors.email ? 1 : 0}
        error_text={errors.email?.message}
      />
      <TextInput
        type='password'
        {...register('password')}
        placeholder='Введіть пароль...'
        has_error={errors.password ? 1 : 0}
        error_text={errors.password?.message}
      />
      <TextInput
        type='text'
        {...register('username')}
        placeholder={`Введіть повне ім'я...`}
        has_error={errors.username ? 1 : 0}
        error_text={errors.username?.message}
      />
      <TextInput
        type='text'
        {...register('avatar_url')}
        placeholder={`Введіть посилання на картинку аватара (не обов'язково)...`}
        has_error={errors.avatar_url ? 1 : 0}
        error_text={errors.avatar_url?.message}
      />
      <Button type='submit'>Створити акаунт</Button>
    </form>
  );
};

export default RegisterForm;
