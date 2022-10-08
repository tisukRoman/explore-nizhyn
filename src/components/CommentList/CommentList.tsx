import { FC } from 'react';
import { Comment } from '@utils/types';
import CommentItem from './Comment';
import CommentForm from './CommentForm';

type CommentListProps = {
  comments: Comment[];
};

export const CommentList: FC<CommentListProps> = ({ comments }) => {
  if (!comments?.length) {
    return <div className='text-slate-300 p-8'>Коментарів немає...</div>;
  }

  return (
    <>
      <div className='text-white my-8 ml-6 text-xl'>Коментарі:</div>
      <CommentForm />
      <ul className='w-full'>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </ul>
    </>
  );
};
