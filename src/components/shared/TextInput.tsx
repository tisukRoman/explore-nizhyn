import { forwardRef, HTMLProps } from 'react';

interface InputProps extends HTMLProps<HTMLInputElement> {
  error_text?: string;
  has_error: 1 | 0;
}

const TextInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { has_error, error_text } = props;
  return (
    <>
      <input
        ref={ref}
        {...props}
        className={`
        ${
          has_error &&
          'border-b-[1px] border-red-500 text-red-500 placeholder:text-red-500'
        } 
        ${props.disabled && 'opacity-70 bg-slate-400'}
        w-full text-white placeholder:text-slate-500 outline-none bg-black p-4 mt-4 focus:border-b-[1px] focus:border-slate-500 appearance-none`}
      />
      {has_error ? <div className='text-red-500 p-2'>{error_text}</div> : null}
    </>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
