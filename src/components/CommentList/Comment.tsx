import { Comment } from '@utils/types';
import { FC } from 'react';
import Image from 'next/image';
import { toLocaleDate } from '@utils/toLocaleDate';

type CommentProps = {
  comment: Comment;
};

const Comment: FC<CommentProps> = ({ comment }) => {
  return (
    <li className='flex p-6 mt-4 drop-shadow-md border-y border-[#000] border-opacity-30'>
      <div className='w-20 h-20 overflow-hidden relative rounded-full shrink-0'>
        <Image
          unoptimized
          src={comment.profiles.avatar_url || '/images/user.png'}
          alt={comment.profiles.username}
          layout='fill'
          className='object-cover'
        />
      </div>
      <div className='text-slate-200 ml-6'>
        <h5 className='font-medium text-xl mb-2'>
          {comment.profiles?.username || 'Анонім'}{' '}
          <span className='font-light text-lg'>
            {toLocaleDate(comment.created_at)}
          </span>
        </h5>
        <p>{comment.text}</p>
      </div>
    </li>
  );
};

export default Comment;
