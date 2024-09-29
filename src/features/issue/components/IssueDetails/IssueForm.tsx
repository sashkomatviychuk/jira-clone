import { Issue, UpdateIssuePayload } from 'types/issue';
import { IssueSchema } from 'features/issue/issue.schema';
import { useUpdateIssueMutation } from 'features/issue/api';
import { FormikProvider } from 'formik';
import { FC, PropsWithChildren } from 'react';
import { useFormikAutoSave } from 'shared/hooks/form';

type IssueFormProps = {
  issue: Issue;
};

const IssueForm: FC<PropsWithChildren<IssueFormProps>> = ({ issue, children }) => {
  const [updateIssue] = useUpdateIssueMutation();

  const { formik } = useFormikAutoSave<UpdateIssuePayload>(
    {
      initialValues: issue as UpdateIssuePayload,
      onSubmit: async (values) => {
        await updateIssue({ ...values, id: issue.id });
      },
      validationSchema: IssueSchema,
    },
    300
  );

  return <FormikProvider value={formik}>{children}</FormikProvider>;
};

export default IssueForm;
