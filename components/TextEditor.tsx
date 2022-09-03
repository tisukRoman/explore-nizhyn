import { FC } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { PostForm } from '@utils/types';

const TextEditor: FC<UseControllerProps<PostForm>> = (props) => {
  const { field } = useController(props);

  return (
    <div className='mt-6 p-2'>
      <h4 className='text-slate-200 font-semibold text-lg'>Контент:</h4>
      <Editor
        wrapperClassName='my-6 text-white border-white rounded-md border-opacity-60-white'
        editorClassName='pl-2'
        toolbarClassName='toolbar-class'
        editorState={field.value as EditorState}
        onEditorStateChange={field.onChange}
        ref={field.ref}
        placeholder='Весь основний контент пишіть тут...'
      />
    </div>
  );
};

export default TextEditor;
