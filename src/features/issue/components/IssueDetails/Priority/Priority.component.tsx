import { FC } from 'react';
import { useFormikContext } from 'formik';

import { IssuePriority, UpdateIssuePayload } from 'types/issue';
import Select, { IOption } from 'components/controls/Select';
import { ISSUE_PRIORITIES } from 'features/issue/issue.constants';
import { FieldWrapper, Label } from '../IssueDetails.styled';

const Priority: FC = () => {
  const formik = useFormikContext<UpdateIssuePayload>();
  const value = formik.values.priority as IssuePriority;

  return (
    <FieldWrapper>
      <Label>Priority</Label>
      <Select
        options={ISSUE_PRIORITIES as IOption[]}
        defaultValue={value}
        onChange={(value) => {
          formik.setFieldValue('priority', value);
        }}
      />
    </FieldWrapper>
  );
};

export default Priority;
