import Select, { useGrayControlStyles } from 'components/controls/Select';
import { components } from 'react-select';
import { options } from './Category.utils';
import { useFormikContext } from 'formik';
import { ProjectSettings } from 'types/project';

export const Category = () => {
  const grayStyles = useGrayControlStyles();
  // maybe bounded context for ProjectSettings?
  // As this component cannot exist outside ProjectSettings
  const formik = useFormikContext<ProjectSettings>();

  return (
    <Select
      isClearable={true}
      placeholder={'Select category'}
      options={options}
      defaultValue={formik.values.category}
      onChange={(category) => formik.setFieldValue('category', category)}
      components={{
        DropdownIndicator: components.DropdownIndicator,
      }}
      styles={grayStyles}
    />
  );
};
