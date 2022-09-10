import { FC } from 'react';
import Image from 'next/image';
import { Post } from '@utils/types';
import { motion } from 'framer-motion';

const PostCover: FC<{ post: Post }> = ({ post }) => {
  const localeDate = new Date(post.created_at as string).toLocaleDateString(
    'ua-UA'
  );

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
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-white font-medium uppercase text-3xl hover-green text-center max-w-[80%] mx-auto'
        >
          {post.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className='text-slate-200 text-base mt-4 mb-2 uppercase hover-green'
        >
          {post.tag}
        </motion.p>
        <div className='bg-green w-10 my-3 h-1' />
        <motion.p
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className='text-slate-200 my-2 mx-auto text-center max-w-[80%] md:max-w-[40%]'
        >
          {post.description}
        </motion.p>
      </article>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className='px-6 h-18 w-full text-slate-200 absolute bottom-6 flex justify-between items-center'
      >
        <div className='flex items-center scale-75 md:scale-90'>
          <div className='w-12 h-12 rounded-full overflow-hidden relative'>
            <Image
              unoptimized
              src={post.profiles.avatar_url || '/images/user.png'}
              alt='Author Avatar'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <span className='ml-4 font-light hover-green'>
            {post.profiles.username}
          </span>
        </div>
        <div className='scale-75 font-light md:scale-90'>
          Створено: {localeDate}
        </div>
      </motion.div>
    </div>
  );
};

export default PostCover;
