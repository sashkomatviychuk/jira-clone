import Select, { IOption } from 'components/controls/Select';
import { useGetProjectQuery } from 'features/project/api';
import get from 'lodash/get';
import { FC } from 'react';
import { components, GroupBase, StylesConfig } from 'react-select';

type UserSelectProps = {
  defaultValue?: Nullable<number | number[]>;
  onChange: (value: Nullable<number | number[]>) => void;
  isMulti?: boolean;
  placeholder?: string;
  styles?: StylesConfig<IOption, boolean, GroupBase<IOption>>;
};

const UserSelect: FC<UserSelectProps> = ({
  onChange,
  defaultValue,
  isMulti,
  placeholder,
  styles,
}) => {
  const { data: project } = useGetProjectQuery();

  const users = get(project, 'users', []).map((user) => ({
    value: user.id,
    label: user.name,
    url: user.avatarUrl,
  }));

  return (
    <Select<number>
      components={{
        DropdownIndicator: components.DropdownIndicator,
      }}
      defaultValue={defaultValue}
      isClearable
      isMulti={isMulti}
      onChange={onChange}
      options={users}
      placeholder={placeholder}
      styles={styles}
    />
  );
};

export default UserSelect;
