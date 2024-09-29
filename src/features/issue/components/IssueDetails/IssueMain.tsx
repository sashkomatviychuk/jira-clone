import { Error } from 'components/controls/Form';
import { useFormikContext } from 'formik';
import { UpdateIssuePayload } from 'mocks/models';
import { FC, memo } from 'react';

import Description from './Description';
import { Left, Space } from './IssueDetails.styled';
import Title from './Title';

const IssueMain: FC = () => {
  const formik = useFormikContext<UpdateIssuePayload>();

  return (
    <Left>
      <Title
        minRows={1}
        onChange={(e) => formik.setFieldValue('title', e.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.currentTarget.blur();
          }
        }}
        value={formik.values.title}
      />
      {formik.errors.title && <Error>{formik.errors.title}</Error>}
      <Space />
      <Description />
    </Left>
  );
};

export default memo(IssueMain);
