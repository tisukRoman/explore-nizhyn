import 'draft-js/dist/Draft.css';
import { useController, UseControllerProps } from 'react-hook-form';
import { Editor, EditorState } from 'draft-js';
import { PostData } from '../utils/types';
import { FC } from 'react';

const TextEditor: FC<UseControllerProps<PostData>> = (props) => {
  const { field } = useController(props);

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
