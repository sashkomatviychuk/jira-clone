import { FC } from 'react';
import { FieldWrapper, Label } from '../IssueDetails.styled';
import UserSelect from '../../UserSelect';
import { useFormikContext } from 'formik';
import { UpdateIssuePayload } from 'app/issue/issue.interface';

const Reporter: FC = () => {
  const formik = useFormikContext<UpdateIssuePayload>();

  return (
    <FieldWrapper>
      <Label>Reporter</Label>
      <UserSelect
        defaultValue={formik.values.reporterId}
        onChange={(value) => {
          formik.setFieldValue('reporterId', value);
        }}
      />
    </FieldWrapper>
  );
};

export default Reporter;
