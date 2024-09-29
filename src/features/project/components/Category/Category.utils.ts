import { IOption } from 'components/controls/Select';

export const options: IOption[] = [
  {
    value: 'software',
    label: 'Software',
  },
  {
    value: 'marketing',
    label: 'Marketing',
  },
  {
    value: 'business',
    label: 'Business',
  },
];

export const getOptionByName = (category: string): Optional<IOption> => {
  return options.find((option) => option.value === category);
};
