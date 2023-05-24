import { FC } from 'react';
import ReactQuill from 'react-quill';

import { EditorContainer } from './Editor.styled';
import { EditorProps } from './interfaces';
import { modulesConfig } from './constants';

import 'react-quill/dist/quill.snow.css';

const Editor: FC<EditorProps> = ({ defaultValue, onChange }) => {
  return (
    <EditorContainer>
      <ReactQuill
        theme="snow"
        modules={modulesConfig}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </EditorContainer>
  );
};

export default Editor;
