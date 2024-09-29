import 'react-quill/dist/quill.snow.css';

import { FC } from 'react';
import ReactQuill from 'react-quill';

import { modulesConfig } from './constants';
import { EditorContainer } from './Editor.styled';
import { EditorProps } from './interfaces';

const Editor: FC<EditorProps> = ({ defaultValue, onChange }) => {
  return (
    <EditorContainer>
      <ReactQuill
        defaultValue={defaultValue}
        modules={modulesConfig}
        onChange={onChange}
        theme="snow"
      />
    </EditorContainer>
  );
};

export default Editor;
