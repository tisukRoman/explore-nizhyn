import { FC, HTMLProps } from 'react';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className='mt-10 px-6 py-2 text-white border-[1px] border-slate-400 rounded-xl hover:scale-110 transition-transform'
    >
      {props.children}
    </button>
  );
};

export default Button;
