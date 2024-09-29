import { FC } from 'react';
import { useFormikContext } from 'formik';
import { useParams } from 'react-router-dom';

import { UpdateIssuePayload } from 'types/issue';
import Select, { IOption } from 'components/controls/Select';
import { SingleValueProps, components } from 'react-select';
import Avatar from 'components/common/Avatar';
import Icon from 'components/common/Icon';
import { useTheme } from 'styled-components';
import { ISSUE_TYPES } from 'features/issue/issue.constants';

interface TypeOption extends IOption {
  id: string;
}

const SelectedOption: FC<SingleValueProps<TypeOption>> = ({ data, ...props }) => {
  return (
    <components.SingleValue {...props} data={data}>
      {data.url && <Avatar size={20} name={data.label} url={data.url} />}
      {data.icon && <Icon name={data.icon} color={data.color} size={16} top={0.5} left={-2} />}
      <span className="selected-label">
        {data.label}-{data.id}
      </span>
    </components.SingleValue>
  );
};

const Type: FC = () => {
  const { issueId } = useParams();
  const formik = useFormikContext<UpdateIssuePayload>();
  const theme = useTheme();

  const options = ISSUE_TYPES.map((option) => ({
    ...option,
    id: issueId,
  }));

  return (
    <Select
      options={options as IOption[]}
      defaultValue={formik.values.type}
      onChange={(type) => formik.setFieldValue('type', type)}
      components={{
        SingleValue: SelectedOption as any,
      }}
      styles={{
        singleValue: (styles) => ({
          ...styles,
          display: 'inline-flex',
          alignItems: 'center',
          height: '20px',
          // paddingLeft: '1px',
          textTransform: 'uppercase',
          color: theme.colors.text.main,

          '> .avatar,.icon': {
            marginRight: '6px',
          },
        }),
      }}
    />
  );
};

export default Type;
