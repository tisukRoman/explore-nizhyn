import 'draft-js/dist/Draft.css';
import { FC } from 'react';
import { Editor, EditorState } from 'draft-js';
import { useController, UseControllerProps } from 'react-hook-form';

type PostData = {
  title: string;
  tag: string;
  img_src: string;
  description?: string;
  content: EditorState;
};

const TextEditor: FC<UseControllerProps<PostData>> = (props) => {
  const { field, fieldState } = useController(props);

  console.log('content', field.value);
  console.log('filedState: ', fieldState);

  return (
    <div className='border-[1px] min-h-40 my-6 p-2 text-white border-white rounded-md border-opacity-60'>
      <Editor
        editorState={field.value as EditorState}
        onChange={field.onChange}
        onBlur={field.onBlur}
        ref={field.ref}
        placeholder='Весь основний контент пишіть тут...'
      />
    </div>
  );
};

export default TextEditor;
