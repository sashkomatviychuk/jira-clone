import { FC, memo } from 'react';
import { Left, Space } from './IssueDetails.styled';
import { useFormikContext } from 'formik';
import { UpdateIssuePayload } from 'mocks/models';
import Title from './Title';
import Description from './Description';
import { Error } from 'components/controls/Form';

const IssueMain: FC = () => {
  const formik = useFormikContext<UpdateIssuePayload>();

  return (
    <Left>
      <Title
        value={formik.values.title}
        onChange={(e) => formik.setFieldValue('title', e.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.currentTarget.blur();
          }
        }}
        minRows={1}
      />
      {formik.errors.title && <Error>{formik.errors.title}</Error>}
      <Space />
      <Description />
    </Left>
  );
};

export default memo(IssueMain);
