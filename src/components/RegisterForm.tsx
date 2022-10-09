import { FC } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useRegister } from '@hooks/useRegister';
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

type InputData = {
  name: 'email' | 'password' | 'username' | 'avatar_url';
  type: string;
  placeholder: string;
};

const RegisterForm: FC = () => {
  const { mutateAsync: signUp, isLoading } = useRegister();

  const onSubmit = async (data: SignUpData) => {
    await signUp(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({ mode: 'onBlur', resolver: yupResolver(schema) });

  const inputs: InputData[] = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Введіть email...',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Введіть пароль...',
    },
    {
      name: 'username',
      type: 'text',
      placeholder: `Введіть повне ім'я...`,
    },
    {
      name: 'avatar_url',
      type: 'text',
      placeholder: `Введіть посилання на картинку аватара (не обов'язково)...`,
    },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='block w-full h-80 mx-auto md:max-w-screen-sm'
    >
      {inputs.map((input) => (
        <TextInput
          key={input.name}
          type={input.type}
          {...register(input.name)}
          placeholder={input.placeholder}
          disabled={isLoading}
          has_error={errors[input.name] ? 1 : 0}
          error_text={errors[input.name]?.message}
        />
      ))}
      <Button type='submit' disabled={isLoading}>
        {isLoading ? 'Зачекайте...' : 'Створити акаунт'}
      </Button>
    </form>
  );
};

export default RegisterForm;
