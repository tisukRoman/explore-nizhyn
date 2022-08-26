import Image from 'next/image';
import { FC } from 'react';
import { Comment } from '../utils/types';

type CommentListProps = {
  comments: Comment[];
};

const CommentList: FC<CommentListProps> = ({ comments }) => {
  if (!comments?.length) {
    return <div>No comments yet...</div>;
  }

  return (
    <ul className='w-full'>
      {comments.map((comment) => (
        <li key={comment.id} className='block border-b-2'>
          <div className='w-12 h-12 overflow-hidden relative rounded-full'>
            <Image
              unoptimized
              src={comment.profiles?.avatar_url || '/images/user.png'}
              alt={comment.profiles?.username}
              layout='fill'
              className='object-cover'
            />
          </div>
          <div>
            <h5>{comment.profiles?.username || 'user'}</h5>
            <p>{comment.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
