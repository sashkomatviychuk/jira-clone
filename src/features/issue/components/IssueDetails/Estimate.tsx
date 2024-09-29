import { Input } from 'components/controls/Input';
import { isValidEstimate } from 'features/issue/issue.utils';
import { useFormikContext } from 'formik';
import { isNumber } from 'lodash';
import { FC } from 'react';
import styled from 'styled-components';
import { UpdateIssuePayload } from 'types/issue';

import { FieldWrapper, Label } from './IssueDetails.styled';

const EstimateInput = styled(Input)`
  width: 100%;
`;

const Estimate: FC = () => {
  const formik = useFormikContext<UpdateIssuePayload>();
  const value = isNumber(formik.values.estimate) ? formik.values.estimate.toString() : '';

  return (
    <FieldWrapper>
      <Label>Estimate</Label>
      <EstimateInput
        onChange={(e) => {
          if (isValidEstimate(e.target.value)) {
            formik.setFieldValue('estimate', parseInt(e.target.value) || '');
          }
        }}
        value={value}
      />
    </FieldWrapper>
  );
};

export default Estimate;
