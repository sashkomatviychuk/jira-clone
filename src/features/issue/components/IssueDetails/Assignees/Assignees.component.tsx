import { useFormikContext } from 'formik';
import { FC } from 'react';
import { UpdateIssuePayload } from 'types/issue';

import UserSelect from '../../UserSelect';
import { FieldWrapper, Label } from '../IssueDetails.styled';

const Reporter: FC = () => {
  const formik = useFormikContext<UpdateIssuePayload>();

  return (
    <FieldWrapper>
      <Label>Assignees</Label>
      <UserSelect
        defaultValue={formik.values.assigneeIds}
        isMulti
        onChange={(value) => {
          formik.setFieldValue('assigneeIds', value);
        }}
      />
    </FieldWrapper>
  );
};

export default Reporter;
