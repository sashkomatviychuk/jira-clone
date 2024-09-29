import Avatar from 'components/common/Avatar/Avatar.component';
import Icon from 'components/common/Icon';
import { FC } from 'react';
import ReactSelect, {
  components,
  MultiValueGenericProps,
  OptionProps,
  Props,
  SingleValueProps,
} from 'react-select';
import { DefaultTheme, ThemeProps, withTheme } from 'styled-components';

import { isSingleValue } from './helper';
// import find from 'lodash/find';
import { IOption, SelectProps } from './interfaces';

export const Option: FC<OptionProps<IOption>> = ({ data, ...props }) => {
  return (
    <components.Option {...props} data={data}>
      {data.url && <Avatar name={data.label} size={20} url={data.url} />}
      {data.icon && <Icon color={data.color} left={-4} name={data.icon} size={16} top={0.5} />}
      <span className="label">{data.label}</span>
    </components.Option>
  );
};

export const SelectedOption: FC<SingleValueProps<IOption>> = ({ data, ...props }) => {
  return (
    <components.SingleValue {...props} data={data}>
      {data.url && <Avatar name={data.label} size={20} url={data.url} />}
      {data.icon && <Icon color={data.color} left={-2} name={data.icon} size={16} top={0.5} />}
      <span className="selected-label">{data.label}</span>
    </components.SingleValue>
  );
};

export const MultiValueLabel: FC<MultiValueGenericProps<IOption>> = ({ data, ...props }) => {
  return (
    <components.MultiValueLabel {...props} data={data}>
      {data.url && <Avatar name={data.label} size={16} url={data.url} />}
      {data.icon && <Icon color={data.color} left={-2} name={data.icon} size={13} top={0.5} />}
      <span className="selected-label">{data.label}</span>
    </components.MultiValueLabel>
  );
};

const BaseSelect: FC<Props<IOption> & ThemeProps<DefaultTheme>> = ({
  theme,
  components,
  styles,
  ...props
}) => {
  return (
    <ReactSelect
      components={{
        DropdownIndicator: null,
        IndicatorSeparator: null,
        Option,
        MultiValueLabel,
        SingleValue: SelectedOption,
        ...components,
      }}
      styles={{
        control: (base, { isFocused }) => ({
          ...base,
          minHeight: 'none',
          fontSize: '13px',
          cursor: 'pointer',
          borderRadius: '4px',
          minWidth: '125px',
          border: isFocused ? `1px solid ${theme.colors.primary.light}` : `1px solid transparent`,
          background: isFocused ? theme.colors.white : '1px solid transparent',
          boxShadow: isFocused ? `${theme.colors.primary.light} 0px 0px 0px 1px` : 'none',

          ':hover': {
            cursor: 'pointer',
            background: isFocused ? theme.colors.white : theme.colors.gray[100],
            border: isFocused ? `1px solid ${theme.colors.primary.light}` : `1px solid transparent`,
          },
        }),
        option: (base) => ({
          ...base,
          fontSize: '13px',
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer',

          '> .avatar,.icon': {
            marginRight: '6px',
          },
        }),
        valueContainer: (base) => ({
          ...base,
          paddingRight: '2px',
        }),
        singleValue: (styles) => ({
          ...styles,
          display: 'inline-flex',
          alignItems: 'center',
          height: '20px',
          paddingLeft: '1px',

          '> .avatar,.icon': {
            marginRight: '6px',
          },
        }),
        clearIndicator: (styles, { isFocused }) => ({
          ...styles,
          color: theme.colors.text.light,
          visibility: isFocused ? 'visible' : 'hidden',

          ':hover': {
            color: theme.colors.text.medium,
          },
        }),
        indicatorsContainer: (styles) => ({
          ...styles,
          height: '27px',
        }),
        multiValueLabel: (styles) => ({
          ...styles,
          fontSize: '13px',
          display: 'inline-flex',
          alignItems: 'center',
        }),
        multiValueRemove: (styles) => ({
          ...styles,
          paddingLeft: '2px',
          paddingRight: '2px',
        }),
        multiValue: (styles) => ({
          ...styles,
          maxHeight: '22px',

          ' .selected-label': {
            marginLeft: '4px',
          },

          '> .avatar,.icon': {
            marginRight: '6px',
          },
        }),
        ...styles,
      }}
      {...props}
    />
  );
};

export const SelectWithTheme = withTheme(BaseSelect);

export default function Select<T = unknown>({
  options,
  onChange,
  defaultValue,
  ...props
}: SelectProps<T>) {
  const search = Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  const defaultOption = options.filter((o) => search.includes(o.value as any));

  return (
    <SelectWithTheme
      defaultValue={defaultOption}
      onChange={(e) => {
        if (!e) {
          return onChange(e);
        }

        if (isSingleValue(e)) {
          onChange(e.value as T);
        } else {
          onChange(e.map((v) => v.value as T));
        }
      }}
      options={options}
      {...props}
    />
  );
}
