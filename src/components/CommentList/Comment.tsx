import Image from 'next/image';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Comment } from '@utils/types';
import { toLocaleDate } from '@utils/toLocaleDate';

type CommentProps = {
  comment: Comment;
  index: number;
};

const Comment: FC<CommentProps> = ({ comment, index }) => (
  <motion.li
    initial={{ opacity: 0, translateX: -50 }}
    animate={{ opacity: 1, translateX: 0 }}
    transition={{ duration: 0.3, delay: index * 0.2 }}
    className='flex flex-col md:flex-row p-6 drop-shadow-md border-y border-[#000] border-opacity-50'
  >
    <div className='w-20 h-20 mb-8 overflow-hidden relative rounded-full shrink-0'>
      <Image
        unoptimized
        src={comment.profiles?.avatar_url || '/images/user.png'}
        alt={comment.profiles?.username || 'Анонім'}
        layout='fill'
        className='object-cover'
      />
    </div>
    <div className='text-slate-200 md:ml-6'>
      <h5 className='font-medium text-xl mb-4'>
        {comment.profiles?.username || 'Анонім'}{' '}
        <span className='font-light text-lg'>
          {toLocaleDate(comment.created_at)}
        </span>
      </h5>
      <p>{comment.text}</p>
    </div>
  </motion.li>
);

export default Comment;
