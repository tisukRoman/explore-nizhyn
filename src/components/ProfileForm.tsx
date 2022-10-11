import { FC } from 'react';
import * as yup from 'yup';
import Image from 'next/image';
import { Profile } from '@utils/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextInput from './shared/TextInput';
import Button from './shared/Button';
import { useEditProfile } from '@hooks/useEditProfile';

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

const ProfileForm: FC<{ profile: Profile }> = ({ profile }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: profile,
  });

  const { mutateAsync: edit, isLoading: isEditing } = useEditProfile();

  const onSubmit = async (data: Profile) => {
    await edit(data);
  };

  const inputs: InputData[] = [
    { name: 'username', placeholder: `Ваше повне ім'я` },
    { name: 'location', placeholder: `Де ви живете?` },
    { name: 'about', placeholder: 'Розкажіть трохи про себе' },
    { name: 'avatar_url', placeholder: 'Сюди вставте url вашого аватару' },
    { name: 'wallpaper_url', placeholder: 'Сюди вставте url вашого фону' },
  ];

  return (
    <div className='w-full pt-16 h-screen bg-[#000] relative flex justify-center'>
      <Image
        unoptimized
        src={profile.wallpaper_url || '/images/placeholder.png'}
        alt={profile.username}
        layout='fill'
        className='h-full object-cover opacity-60'
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-[90%] md:w-[70%] lg:w-[50%] flex justify-between items-center absolute flex-col lg:flex-row'
      >
        <motion.div
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
          className='flex items-center flex-col ali gap-8 lg:gap-20 md:flex-row'
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
          <div className='text-white grow flex flex-col'>
            {inputs.map(({ name, placeholder }) => (
              <TextInput
                key={name}
                type='text'
                {...register(name)}
                placeholder={placeholder}
                disabled={isEditing}
                has_error={errors.username ? 1 : 0}
                error_text={errors.username?.message}
              />
            ))}
            <Button type='submit' disabled={isEditing}>
              {isEditing ? 'Зачекайте...' : 'Зберегти'}
            </Button>
          </div>
        </motion.div>
      </form>
    </div>
  );
};

export default ProfileForm;
