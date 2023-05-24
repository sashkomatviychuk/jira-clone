import * as Yup from 'yup';

export const ProjectSettingsSchema = Yup.object().shape({
  title: Yup.string().max(100, 'Too Long!').required('Please provide project name'),
  url: Yup.string().url('Please provide project valid URL').required('Please provide project URL'),
  category: Yup.string().required('Please provide category'),
});
