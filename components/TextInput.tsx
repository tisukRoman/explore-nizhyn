import { forwardRef, HTMLProps } from 'react';

type InputProps = HTMLProps<HTMLInputElement>;

const TextInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className='w-full text-white placeholder:text-slate-500 outline-none bg-black p-4 mt-4 focus:border-b-[1px] focus:border-slate-500'
    />
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
