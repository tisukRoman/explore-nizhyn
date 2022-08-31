import 'draft-js/dist/Draft.css';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { FC, useState } from 'react';

const TextEditor: FC = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onEditorChage = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  const handleKeyCommand = (
    command: Draft.DraftEditorCommand,
    editorState: EditorState
  ) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onEditorChage(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
      />
    </div>
  );
};

export default TextEditor;
