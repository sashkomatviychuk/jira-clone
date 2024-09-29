import { IssuePriority, IssueType } from 'types/issue';
import * as Yup from 'yup';

export const IssueSchema = Yup.object().shape({
  title: Yup.string()
    .max(100, 'Max length of summary should be 100')
    .required('Please provide issue summary'),
  priority: Yup.string()
    .oneOf(Object.values(IssuePriority))
    .required('Please provide issue priority'),
  type: Yup.string()
    .oneOf(Object.values(IssueType), 'Please select issue type')
    .required('Please select issue type'),
});
