import { FC } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

type LoadMoreButtonProps = {
  onClick: () => void;
  isLoading: boolean;
};

const LoadMoreButton: FC<LoadMoreButtonProps> = ({ onClick, isLoading }) => {
  return (
    <div
      onClick={onClick}
      className='bg-[#000] w-full h-18 p-8 text-white text-2xl text-center cursor-pointer hover-green flex justify-center items-center'
    >
      {isLoading ? (
        'Завантаження...'
      ) : (
        <>
          Завантажити ще пости
          <AiOutlineArrowDown className='ml-4' />
        </>
      )}
    </div>
  );
};

export default LoadMoreButton;
