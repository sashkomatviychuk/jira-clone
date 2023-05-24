import styled from 'styled-components';
import { colors } from 'resources/theme/colors';

export const EditorContainer = styled.div`
  margin-top: 10px;

  .ql-toolbar.ql-snow {
    border-radius: 4px 4px 0 0;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    border-bottom: none;
  }
  .ql-container.ql-snow {
    border-radius: 0 0 4px 4px;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    border-top: none;
    color: ${colors.textDarkest};
    font-size: 13px;
  }
  .ql-editor {
    min-height: 110px;
  }
`;
