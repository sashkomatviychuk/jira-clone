import { Row } from 'components/common/Row';
import { Button } from 'components/controls/Button';
import Editor from 'components/controls/Editor';
import { useFormikContext } from 'formik';
import { FC, useState } from 'react';
import { UpdateIssuePayload } from 'types/issue';

import { Space } from '../IssueDetails.styled';
import { Container, Label, Preview } from './Description.styled';

const Description: FC = () => {
  const [isEdit, setIsEdit] = useState(false);
  const formik = useFormikContext<UpdateIssuePayload>();
  const [text, setText] = useState(formik.values.description);

  let content;

  if (!isEdit) {
    content = (
      <Preview
        dangerouslySetInnerHTML={{ __html: formik.values.description || '' }}
        onClick={() => setIsEdit(true)}
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
