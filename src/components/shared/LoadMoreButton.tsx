import { FC } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

type LoadMoreButtonProps = {
  onClick: () => void;
  isLoading: boolean;
  isListEnd: boolean;
  disabled: boolean;
};

const LoadMoreButton: FC<LoadMoreButtonProps> = ({
  onClick,
  isLoading,
  isListEnd,
  disabled,
}) => {
  const renderTitle = () => {
    if (isLoading) {
      return 'Завантаження...';
    } else if (isListEnd) {
      return 'Більше постів немає...';
    } else {
      return (
        <>
          Завантажити ще пости
          <AiOutlineArrowDown className='ml-4' />
        </>
      );
    }
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className='bg-[#000] w-full h-18 p-8 text-white text-2xl text-center cursor-pointer hover-green flex justify-center items-center'
    >
      {renderTitle()}
    </button>
  );
};

export default LoadMoreButton;
