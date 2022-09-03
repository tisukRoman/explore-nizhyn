import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useController, UseControllerProps } from 'react-hook-form';
import { PostData } from '@utils/types';
import 'react-quill/dist/quill.snow.css';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const TextEditor: FC<UseControllerProps<PostData>> = (props) => {
  const { field } = useController(props);

  return (
    <div className='mt-6 p-2'>
      <h4 className='mb-4 text-slate-200 font-semibold text-lg'>Контент:</h4>
      <QuillNoSSRWrapper
        className='text-slate-200'
        modules={modules}
        formats={formats}
        theme='snow'
        onChange={field.onChange}
      />
    </div>
  );
};

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'video'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'video',
];

export default TextEditor;
