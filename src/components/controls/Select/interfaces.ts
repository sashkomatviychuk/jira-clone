import { GroupBase, StylesConfig } from 'react-select';
import { SelectComponents } from 'react-select/dist/declarations/src/components';

export interface IOption<T extends unknown = unknown> {
  value: T;
  label: string;
  color?: string;
  icon?: 'arrow-up' | 'arrow-down';
  url?: string;
}

export type SelectProps<TValue extends unknown> = {
  options: IOption[];
  onChange: (value: Nullable<TValue | TValue[]>) => void;
  defaultValue?: Nullable<TValue | TValue[]>;
  styles?: StylesConfig<IOption, boolean, GroupBase<IOption>>;
  components?: Partial<SelectComponents<IOption, boolean, GroupBase<IOption>>>;
  placeholder?: string;
  isSearchable?: boolean;
  isClearable?: boolean;
  isMulti?: boolean;
};
