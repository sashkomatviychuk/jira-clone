import Select, { IOption } from 'components/controls/Select';
import { ISSUE_PRIORITIES } from 'features/issue/issue.constants';
import { useFormikContext } from 'formik';
import { FC } from 'react';
import { IssuePriority, UpdateIssuePayload } from 'types/issue';

import { FieldWrapper, Label } from '../IssueDetails.styled';

const Priority: FC = () => {
  const formik = useFormikContext<UpdateIssuePayload>();
  const value = formik.values.priority as IssuePriority;

  return (
    <FieldWrapper>
      <Label>Priority</Label>
      <Select
        defaultValue={value}
        onChange={(value) => {
          formik.setFieldValue('priority', value);
        }}
        options={ISSUE_PRIORITIES as IOption[]}
      />
    </FieldWrapper>
  );
};

export default Priority;
