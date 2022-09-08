import Image from 'next/image';
import { Profile } from '@utils/types';
import { FC } from 'react';

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
        className='h-full object-cover opacity-60'
      />
      <article className='flex justify-center items-center pt-32 absolute w-full flex-col md:flex-row md:pt-40'>
        <div className='flex justify-center items-center'>
          <div className='w-40 h-40 relative rounded-full overflow-hidden'>
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
        </div>
        <div className='w-[90%] md:w-96 text-white mt-8 text-center md:ml-20 md:mt-0'>{profile.about} System Engineering student. 19 years old. I love open source projects, coffee, Age of Empires... Did I say coffee already?</div>
      </article>
    </div>
  );
};

export default AuthorCover;
