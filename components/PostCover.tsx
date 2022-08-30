import { FC } from 'react';
import Image from 'next/image';
import { PostDetails } from '../utils/types';

const PostCover: FC<{ post: PostDetails }> = ({ post }) => {
  return (
    <div className='w-full h-128 bg-[#000] relative'>
      <Image
        unoptimized
        src={post.img_src ? post.img_src : '/images/placeholder.png'}
        alt={post.title}
        layout='fill'
        className='h-full object-cover opacity-60'
      />
      <article className='bg-black w-full h-full z-1 flex flex-col items-center justify-center absolute bg-opacity-60 shadow-2xl'>
        <h3 className='text-white font-medium uppercase text-3xl hover-green text-center max-w-[80%] mx-auto'>
          {post.title}
        </h3>
        <p className='text-slate-200 text-base my-2 uppercase hover-green'>
          {post.tag}
        </p>
        <div className='bg-green w-10 my-3 h-1' />
        <p className='text-slate-200 my-2 mx-auto text-center max-w-[80%] md:max-w-[40%]'>
          {post.description}
        </p>
      </article>
    </div>
  );
};

export default PostCover;
