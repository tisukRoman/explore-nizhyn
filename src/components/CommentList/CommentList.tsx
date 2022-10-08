import { FC } from 'react';
import CommentItem from './Comment';
import CommentForm from './CommentForm';
import { useGetCommentList } from '@hooks/useGetCommentList';

export const CommentList: FC = () => {
  const [comments, isFetching, error] = useGetCommentList();

  const renderList = () => {
    if (isFetching) {
      return <div>Завантаження Коментарів...</div>;
    }
    if (comments && comments.length) {
      return (
        <ul className='w-full'>
          {comments.map((comment, i) => (
            <CommentItem key={comment.id} comment={comment} index={i}/>
          ))}
        </ul>
      );
    } else if (comments && !comments.length) {
      return <div className='text-slate-300 p-8'>Коментарів немає...</div>;
    } else if (error) {
      return <div>Помилка...</div>;
    }
  };

  return (
    <>
      <div className='text-white my-8 ml-6 text-xl'>Коментарі:</div>
      <CommentForm />
      {renderList()}
    </>
  );
};
