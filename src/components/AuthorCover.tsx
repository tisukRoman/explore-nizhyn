import Image from 'next/image';
import { Profile } from '@utils/types';
import { FC } from 'react';
import { motion } from 'framer-motion';

type AuthorCoverProps = {
  profile: Profile;
};

const AuthorCover: FC<AuthorCoverProps> = ({ profile }) => {
  return (
    <div className='w-full h-128 bg-[#000] relative'>
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
      <article className='w-[90%] md:w-[50%] left-1/2 -translate-x-1/2 flex justify-between items-center pt-32 absolute flex-col lg:mx-auto lg:flex-row lg:pt-40'>
        <motion.div
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
          className='flex justify-center items-center'
        >
          <div className='w-32 h-32 relative rounded-full overflow-hidden'>
            <Image
              unoptimized
              src={profile.avatar_url ? profile.avatar_url : '/images/user.png'}
              alt={profile.username}
              layout='fill'
              className='h-full object-cover'
            />
          </div>
          <div className='text-white ml-4'>
            <h1 className='text-2xl font-bold'>{profile.username}</h1>
            <address>{profile.location || 'Локацію не вказано'}</address>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.4}}
          className='w-[90%] lg:w-96 text-white mt-8 text-center lg:mt-0'
        >
          {profile.about}
        </motion.p>
      </article>
    </div>
  );
};

export default AuthorCover;
