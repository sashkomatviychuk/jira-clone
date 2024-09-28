import { FC } from 'react';
import { FieldWrapper, Label } from '../IssueDetails.styled';
import UserSelect from '../../UserSelect';
import { useFormikContext } from 'formik';
import { UpdateIssuePayload } from 'types/issue';

const Reporter: FC = () => {
  const formik = useFormikContext<UpdateIssuePayload>();

  return (
    <FieldWrapper>
      <Label>Assignees</Label>
      <UserSelect
        defaultValue={formik.values.assigneeIds}
        onChange={(value) => {
          formik.setFieldValue('assigneeIds', value);
        }}
        isMulti
      />
    </FieldWrapper>
  );
};

export default Reporter;
