import { FC, ReactNode } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.bubble.css';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const TextViewer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <QuillNoSSRWrapper
      className='text-slate-300'
      defaultValue={children as any}
      theme='bubble'
      readOnly
    />
  );
};

export default TextViewer;
