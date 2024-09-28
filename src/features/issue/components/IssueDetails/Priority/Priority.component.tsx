import { FC } from 'react';
import { FieldWrapper, Label } from '../IssueDetails.styled';
import { getPriorityOptions } from 'app/issue/issue.service';
import { useFormikContext } from 'formik';
import { IssuePriority, UpdateIssuePayload } from 'types/issue';
import Select from 'components/controls/Select';

const Priority: FC = () => {
  const formik = useFormikContext<UpdateIssuePayload>();
  const options = getPriorityOptions();
  const value = formik.values.priority as IssuePriority;

  return (
    <FieldWrapper>
      <Label>Priority</Label>
      <Select
        options={options}
        defaultValue={value}
        onChange={(value) => {
          formik.setFieldValue('priority', value);
        }}
      />
    </FieldWrapper>
  );
};

export default Priority;
