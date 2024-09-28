import { FC } from 'react';
import { FieldWrapper, Label } from './IssueDetails.styled';
import { Input } from 'components/controls/Input';
import styled from 'styled-components';
import { useFormikContext } from 'formik';
import { UpdateIssuePayload } from 'types/issue';
import { isNumber } from 'lodash';
import { isValidEstimate } from 'app/issue/issue.service';

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
        value={value}
        onChange={(e) => {
          if (isValidEstimate(e.target.value)) {
            formik.setFieldValue('estimate', parseInt(e.target.value) || '');
          }
        }}
      />
    </FieldWrapper>
  );
};

export default Estimate;
