import Avatar from 'components/common/Avatar';
import Icon from 'components/common/Icon';
import Select, { IOption } from 'components/controls/Select';
import { ISSUE_TYPES } from 'features/issue/issue.constants';
import { useFormikContext } from 'formik';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { components, SingleValueProps } from 'react-select';
import { useTheme } from 'styled-components';
import { UpdateIssuePayload } from 'types/issue';

interface TypeOption extends IOption {
  id: string;
}

const SelectedOption: FC<SingleValueProps<TypeOption>> = ({ data, ...props }) => {
  return (
    <components.SingleValue {...props} data={data}>
      {data.url && <Avatar name={data.label} size={20} url={data.url} />}
      {data.icon && <Icon color={data.color} left={-2} name={data.icon} size={16} top={0.5} />}
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
      components={{
        SingleValue: SelectedOption as any,
      }}
      defaultValue={formik.values.type}
      onChange={(type) => formik.setFieldValue('type', type)}
      options={options as IOption[]}
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
