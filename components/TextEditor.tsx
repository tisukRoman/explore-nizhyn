import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'draft-js/dist/Draft.css';
import { FC } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { PostData } from '@utils/types';

const TextEditor: FC<UseControllerProps<PostData>> = (props) => {
  const { field } = useController(props);

  return (
    <div className='border-[1px] min-h-40 my-6 p-2 text-white border-white rounded-md border-opacity-60'>
      <Editor
        wrapperClassName='wrapper-class'
        editorClassName='editor-class'
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
