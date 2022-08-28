import { FC } from 'react';
import Image from 'next/image';
import { FaMapMarker } from 'react-icons/fa';
import { Profile } from '../utils/types';

const AuthorCard: FC<{ author: Profile }> = ({ author }) => {
  return (
    <div className='w-full h-96 relative'>
      {author.wallpaper_url && (
        <Image
          unoptimized
          src={author.wallpaper_url}
          alt={'Author Wallpaper'}
          layout='fill'
          className='obect-cover'
        />
      )}
      <div className='w-full h-full bg-[#000] bg-opacity-70 flex flex-col items-center absolute pt-12'>
        <div className='w-32 h-32 relative overflow-hidden rounded-full'>
          <Image
            unoptimized
            src={author.avatar_url ? author.avatar_url : '/images/user.png'}
            alt={author.username}
            layout='fill'
            className='object-cover'
          />
        </div>
        <h3 className='mt-6 text-white text-2xl uppercase font-extrabold'>
          {author.username}
        </h3>
        <div className='mt-6 p-1 bg-[#000] w-full'>
          <p className='text-white opacity-70 text-xs text-center flex justify-center'>
            <FaMapMarker />{' '}
            <span className='ml-2'>
              {author.location || 'Локацію не вказано'}
            </span>
          </p>
        </div>
        <article className='mt-6 text-white w-[80%] mx-auto text-center'>
          {author.about}
        </article>
      </div>
    </div>
  );
};

export default AuthorCard;
