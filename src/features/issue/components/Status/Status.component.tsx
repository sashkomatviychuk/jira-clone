import { IOption, isSingleValue, SelectWithTheme } from 'components/controls/Select';
import {
  ISSUE_STATUS_BG_COLORS,
  ISSUE_STATUS_COLORS,
  ISSUE_STATUSES,
} from 'features/issue/issue.constants';
import { useFormikContext } from 'formik';
import { FC } from 'react';
import { components, OptionProps } from 'react-select';
import styled from 'styled-components';
import { IssueStatus, UpdateIssuePayload } from 'types/issue';

import { FieldWrapper, Label } from '../IssueDetails/IssueDetails.styled';

type OptionLabelProps = {
  status: IssueStatus;
  color?: string;
};

const OptionLabel = styled.span<OptionLabelProps>`
  padding: 4px 10px;
  text-transform: uppercase;
  background-color: ${({ status }) => ISSUE_STATUS_BG_COLORS[status]};
  color: ${({ color }) => color};
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
`;

const Option: FC<OptionProps<IOption<IssueStatus>>> = ({ data, ...props }) => {
  return (
    <components.Option data={data} {...props}>
      <OptionLabel color={data.color} status={data.value}>
        {data.label}
      </OptionLabel>
    </components.Option>
  );
};

const Status: FC = () => {
  const formik = useFormikContext<UpdateIssuePayload>();
  const value = formik.values.status as IssueStatus;
  const option = ISSUE_STATUSES.find((o) => o.value === value);

  return (
    <FieldWrapper>
      <Label>Status</Label>
      <SelectWithTheme
        components={{ DropdownIndicator: components.DropdownIndicator, Option: Option as any }}
        defaultValue={option}
        isSearchable={false}
        onChange={(option) => {
          if (isSingleValue(option)) {
            formik.setFieldValue('status', option!.value);
          }
        }}
        options={ISSUE_STATUSES}
        styles={{
          control: (base) => ({
            ...base,
            minHeight: 'none',
            fontSize: '12px',
            border: 0,
            borderRadius: '4px',
            background: ISSUE_STATUS_BG_COLORS[value],
            color: ISSUE_STATUS_COLORS[value],
            boxShadow: 'none',
            textTransform: 'uppercase',
            fontWeight: 500,
            width: 'fit-content',

            ' .selected-label': {
              color: ISSUE_STATUS_COLORS[value],
            },

            ':hover': {
              cursor: 'pointer',
              border: 0,
            },

            ':active': {
              border: 0,
            },
          }),
          menu: (base) => ({
            ...base,
            minWidth: '220px',
          }),
          indicatorsContainer: (styles) => ({
            ...styles,
            height: '27px',

            div: {
              padding: '4px 8px 4px 4px',
              color: ISSUE_STATUS_COLORS[value],
              ':hover': {
                color: ISSUE_STATUS_COLORS[value],
              },
            },
          }),
        }}
      />
    </FieldWrapper>
  );
};

export default Status;
