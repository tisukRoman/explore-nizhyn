import { FC } from 'react';
import Image from 'next/image';
import { Comment } from '@utils/types';

type CommentListProps = {
  comments: Comment[];
};

export const CommentList: FC<CommentListProps> = ({ comments }) => {
  if (!comments?.length) {
    return <div>No comments yet...</div>;
  }

  return (
    <ul className='w-full my-16 border-t-[1px]'>
      {comments.map((comment) => (
        <li key={comment.id} className='flex p-4 mt-4 drop-shadow-md'>
          <div className='w-12 h-12 overflow-hidden relative rounded-full shrink-0'>
            <Image
              unoptimized
              src={comment.profiles.avatar_url || '/images/user.png'}
              alt={comment.profiles.username}
              layout='fill'
              className='object-cover'
            />
          </div>
          <div className='text-slate-200 ml-4'>
            <h5 className='font-medium'>
              {comment.profiles?.username || 'user'}
            </h5>
            <p>{comment.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
