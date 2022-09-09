import { FC } from 'react';
import Image from 'next/image';
import { Post } from '@utils/types';
import { motion } from 'framer-motion';

const PostCover: FC<{ post: Post }> = ({ post }) => {
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
        <motion.h3
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className='text-white font-medium uppercase text-3xl hover-green text-center max-w-[80%] mx-auto'
        >
          {post.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className='text-slate-200 text-base mt-4 mb-2 uppercase hover-green'
        >
          {post.tag}
        </motion.p>
        <div className='bg-green w-10 my-3 h-1' />
        <motion.p
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='text-slate-200 my-2 mx-auto text-center max-w-[80%] md:max-w-[40%]'
        >
          {post.description}
        </motion.p>
      </article>
    </div>
  );
};

export default PostCover;
