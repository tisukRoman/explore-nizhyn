import { FC } from 'react';
import { Comment } from '@utils/types';
import CommentItem from './Comment';

type CommentListProps = {
  comments: Comment[];
};

export const CommentList: FC<CommentListProps> = ({ comments }) => {
  if (!comments?.length) {
    return <div className='text-slate-300 p-8'>Коментарів немає...</div>;
  }

  return (
    <ul className='w-full my-16'>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};
