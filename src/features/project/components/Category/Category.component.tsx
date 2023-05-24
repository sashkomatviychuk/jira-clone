import BaseSelect, { isSingleValue } from 'components/controls/Select';
import { components } from 'react-select';
import { FC } from 'react';
import { useTheme } from 'styled-components';
import { getOptionByName, options } from 'app/project/project-category';

type CategoryProps = {
  defaultValue?: string;
  onChange: (category: Nullable<string>) => void;
};

const Category: FC<CategoryProps> = ({ defaultValue, onChange }) => {
  const theme = useTheme();
  const defaultOption = defaultValue ? getOptionByName(defaultValue) : undefined;

  return (
    <BaseSelect
      isClearable={true}
      defaultValue={defaultOption}
      placeholder={'Select category...'}
      onChange={(e) => {
        if (e && isSingleValue(e)) {
          onChange(e.value as string);
        } else if (!e) {
          onChange(e);
        }
      }}
      options={options}
      styles={{
        control: (base, { isFocused }) => ({
          ...base,
          minHeight: 'none',
          fontSize: '13px',
          border: isFocused
            ? `1px solid ${theme.colors.primary.light}`
            : `1px solid ${theme.colors.gray[200]}`,
          borderRadius: '4px',
          background: isFocused ? theme.colors.white : theme.colors.secondary.main,
          boxShadow: isFocused ? `${theme.colors.primary.light} 0px 0px 0px 1px` : 'none',
          minWidth: '125px',

          ':hover': {
            cursor: 'pointer',
            background: isFocused ? theme.colors.white : theme.colors.secondary.main,
            border: isFocused
              ? `1px solid ${theme.colors.primary.light}`
              : `1px solid ${theme.colors.gray[300]}`,
          },
        }),
      }}
      components={{
        DropdownIndicator: components.DropdownIndicator,
      }}
    />
  );
};

export default Category;
