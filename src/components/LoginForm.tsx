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

type InputData = {
  name: 'email' | 'password';
  placeholder: string;
};

const LoginForm: FC<LoginProps> = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ mode: 'onBlur', resolver: yupResolver(schema) });

  const inputs: InputData[] = [
    { name: 'email', placeholder: 'Введіть email...' },
    { name: 'password', placeholder: 'Введіть пароль...' },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full h-80 mx-auto md:max-w-screen-sm'
    >
      {inputs.map((input) => (
        <TextInput
          key={input.name}
          type={input.name}
          {...register(input.name)}
          placeholder={input.placeholder}
          disabled={isLoading}
          has_error={errors[input.name] ? 1 : 0}
          error_text={errors[input.name]?.message}
        />
      ))}
      <Button type='submit' disabled={isLoading}>
        {isLoading ? 'Зачекайте...' : 'Увійти'}
      </Button>
    </form>
  );
};

export default LoginForm;
