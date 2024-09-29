import Select, { useGrayControlStyles } from 'components/controls/Select';
import { useFormikContext } from 'formik';
import { components } from 'react-select';
import { ProjectSettings } from 'types/project';

import { options } from './Category.utils';

export const Category = () => {
  const grayStyles = useGrayControlStyles();
  // maybe bounded context for ProjectSettings?
  // As this component cannot exist outside ProjectSettings
  const formik = useFormikContext<ProjectSettings>();

  return (
    <Select
      components={{
        DropdownIndicator: components.DropdownIndicator,
      }}
      defaultValue={formik.values.category}
      isClearable={true}
      onChange={(category) => formik.setFieldValue('category', category)}
      options={options}
      placeholder={'Select category'}
      styles={grayStyles}
    />
  );
};
