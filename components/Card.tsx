import { FC } from 'react';
import Image from 'next/image';
import { Post } from '../utils/types';
import { BiLink } from 'react-icons/bi';

type CardProps = {
  post: Post;
};

const Card: FC<CardProps> = ({ post }) => {
  return (
    <div className='h-128 w-full bg-gray-200 overflow-hidden relative group first:col-span-2'>
      <Image
        unoptimized
        src={post.img_src || '/images/placeholder.png'}
        alt={post.title}
        layout='fill'
        className='object-cover w-full h-full z-0 drop-shadow-2xl lg:grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700'
      />
      <div className='bg-black w-full h-full z-1 flex flex-col items-center justify-center absolute bg-opacity-60 shadow-2xl'>
        <h3 className='text-white font-medium uppercase text-3xl hover-green text-center max-w-[80%] mx-auto'>
          {post.title}
        </h3>
        <p className='text-slate-200 text-base my-2 uppercase hover-green'>
          {post.tag}
        </p>
        <div className='bg-green w-10 my-3 h-1' />
        <div className='text-white uppercase font-medium hover-green'>
          Read Post &#8594;
        </div>
      </div>
      <div className='absolute bottom-8 left-4 flex w-full items-center cursor-pointer lg:opacity-0 lg:translate-y-12 group-hover:opacity-80 group-hover:translate-y-0 transition-all duration-700'>
        <div className='w-12 h-12 rounded-full overflow-hidden relative'>
          <Image
            src='/images/user.png'
            alt='Author Avatar'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='text-white ml-4 font-light hover-green'>
          {post.author || 'unknown'}
        </div>
      </div>
      <div className='absolute top-4 right-4 w-14 h-14 bg-slate-200 bg-opacity-60 hover:bg-opacity-100 rounded-full flex justify-center items-center cursor-pointer text-3xl lg:opacity-0 lg:-translate-y-10 group-hover:opacity-60 group-hover:translate-y-0 transition-all duration-700'>
        <BiLink />
      </div>
    </div>
  );
};

export default Card;
