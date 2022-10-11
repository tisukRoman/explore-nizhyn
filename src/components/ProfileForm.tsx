import { FC } from 'react';
import * as yup from 'yup';
import Image from 'next/image';
import { Profile } from '@utils/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextInput from './shared/TextInput';

const schema = yup.object({
  username: yup
    .string()
    .required(`Обов'язкове поле`)
    .min(6, 'Мінімум 6 символів'),
  avatar_url: yup.string().url('Має бути посилання'),
  location: yup.string(),
  about: yup.string(),
  wallpaper_url: yup.string().url('Має бути посилання'),
});

type InputData = {
  name: 'username' | 'location' | 'about' | 'avatar_url' | 'wallpaper_url';
  placeholder: string;
};

const ProfileForm: FC<{ profile: Profile; isLoading: boolean }> = ({
  profile,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: profile,
  });

  const onSubmit = (data: Profile) => {
    console.log(data);
  };

  const inputs: InputData[] = [
    { name: 'username', placeholder: `Ваше повне ім'я` },
    { name: 'location', placeholder: `Де ви живете?` },
    { name: 'about', placeholder: 'Розкажіть трохи про себе' },
    { name: 'avatar_url', placeholder: 'Сюди вставте url вашого аватару' },
    { name: 'wallpaper_url', placeholder: 'Сюди вставте url вашого фону' },
  ];

  return (
    <div className='w-full pt-16 h-screen bg-[#000] relative'>
      <Image
        unoptimized
        src={
          profile.wallpaper_url
            ? profile.wallpaper_url
            : '/images/placeholder.png'
        }
        alt={profile.username}
        layout='fill'
        className='h-full object-cover opacity-60 '
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-[90%] md:w-[70%] lg:w-[50%] left-1/2 -translate-x-1/2 flex justify-between items-center absolute flex-col lg:mx-auto lg:flex-row'
      >
        <motion.div
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
          className='flex justify-center items-center flex-col md:flex-row'
        >
          <div className='w-32 h-32 relative rounded-full overflow-hidden shrink-0'>
            <Image
              unoptimized
              src={profile.avatar_url || '/images/user.png'}
              alt={profile.username}
              layout='fill'
              className='h-full object-cover'
            />
          </div>
          <div className='text-white ml-4'>
            {inputs.map(({ name, placeholder }) => (
              <TextInput
                key={name}
                type='text'
                {...register(name)}
                placeholder={placeholder}
                disabled={isLoading}
                has_error={errors.username ? 1 : 0}
                error_text={errors.username?.message}
              />
            ))}
          </div>
        </motion.div>
      </form>
    </div>
  );
};

export default ProfileForm;
