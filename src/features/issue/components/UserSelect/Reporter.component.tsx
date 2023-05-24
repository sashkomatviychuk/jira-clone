import { FC } from 'react';
import get from 'lodash/get';
import { GroupBase, StylesConfig, components } from 'react-select';

import Select, { IOption } from 'components/controls/Select';
import { useGetProjectQuery } from 'app/project/project.api';

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
      defaultValue={defaultValue}
      options={users}
      placeholder={placeholder}
      onChange={onChange}
      styles={styles}
      components={{
        DropdownIndicator: components.DropdownIndicator,
      }}
      isMulti={isMulti}
      isClearable
    />
  );
};

export default UserSelect;
