import { useFormikContext } from 'formik';
import { FC } from 'react';
import { UpdateIssuePayload } from 'types/issue';

import UserSelect from '../../UserSelect';
import { FieldWrapper, Label } from '../IssueDetails.styled';

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
