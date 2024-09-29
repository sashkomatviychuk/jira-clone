import { GroupBase, MultiValue, SingleValue, StylesConfig } from 'react-select';
import { useTheme } from 'styled-components';

import { IOption } from './interfaces';

export const isSingleValue = (
  val: SingleValue<IOption> | MultiValue<IOption>
): val is SingleValue<IOption> => {
  return !Array.isArray(val);
};

export const useGrayControlStyles = (): StylesConfig<IOption, boolean, GroupBase<IOption>> => {
  const theme = useTheme();

  return {
    control: (base, { isFocused, isMulti }) => ({
      ...base,
      minHeight: 'none',
      fontSize: '13px',
      padding: isMulti ? '2px 0' : base.padding,
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
  };
};
