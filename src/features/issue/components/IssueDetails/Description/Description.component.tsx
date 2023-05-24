import { FC, useState } from 'react';
import { useFormikContext } from 'formik';

import { UpdateIssuePayload } from 'app/issue/issue.interface';
import Editor from 'components/controls/Editor';
import { Container, Label, Preview } from './Description.styled';
import { Button } from 'components/controls/Button';
import { Row } from 'components/common/Row';
import { Space } from '../IssueDetails.styled';

const Description: FC = () => {
  const [isEdit, setIsEdit] = useState(false);
  const formik = useFormikContext<UpdateIssuePayload>();
  const [text, setText] = useState(formik.values.description);

  let content;

  if (!isEdit) {
    content = (
      <Preview
        onClick={() => setIsEdit(true)}
        dangerouslySetInnerHTML={{ __html: formik.values.description || '' }}
      />
    );
  } else {
    content = (
      <>
        <Editor defaultValue={formik.values.description} onChange={(text) => setText(text)} />
        <Space />
        <Row>
          <Button
            className="primary"
            onClick={() => {
              formik.setFieldValue('description', text);
              setIsEdit(false);
            }}
          >
            Save
          </Button>
          <Button className="link" onClick={() => setIsEdit(false)}>
            Cancel
          </Button>
        </Row>
      </>
    );
  }

  return (
    <Container>
      <Label>Description</Label>
      {content}
    </Container>
  );
};

export default Description;
