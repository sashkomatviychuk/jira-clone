import { FC } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { components } from 'react-select';

import { Description, Error, Label, Row } from 'components/controls/Form';
import { Input } from './CreateIssue.styled';
import Button from 'components/controls/Button';
import { CreateIssuePayload, IssuePriority, IssueType } from 'types/issue';
import { useCreateIssueMutation } from 'features/issue/api';
import { Row as FlexRow } from 'components/common/Row';
import Editor from 'components/controls/Editor';
import { IssueSchema } from 'features/issue/issue.schema';
import Select, { IOption, useGrayControlStyles } from 'components/controls/Select';
import UserSelect from '../UserSelect';
import { ISSUE_PRIORITIES, ISSUE_TYPES } from 'features/issue/issue.constants';

type CreateIssueProps = {
  handleClose: () => void;
};

const CreateIssue: FC<CreateIssueProps> = ({ handleClose }) => {
  const navigate = useNavigate();
  const grayStyles = useGrayControlStyles();
  const [createIssue, { isLoading }] = useCreateIssueMutation();

  const formik = useFormik<CreateIssuePayload>({
    initialValues: {
      title: '',
      description: '',
      assigneeIds: [],
      reporterId: null,
      type: IssueType.task,
      priority: IssuePriority.low,
    },
    onSubmit: async (values) => {
      await createIssue(values);
      navigate('/project');
    },
    validationSchema: IssueSchema,
  });
  const { errors, isValid } = formik;

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row>
        <Label htmlFor="type">Issue type</Label>
        <Select
          options={ISSUE_TYPES as IOption[]}
          defaultValue={formik.values.type as any}
          onChange={(priority) => formik.setFieldValue('type', priority)}
          styles={grayStyles}
          components={{
            DropdownIndicator: components.DropdownIndicator,
          }}
        />
        <Description>Start typing to get a list of possible matches.</Description>
        {<Error>{errors.type}</Error>}
      </Row>
      <Row>
        <Label htmlFor="title">Short Summary</Label>
        <Input defaultValue={formik.values.title} onChange={formik.handleChange} name="title" />
        <Description>Concisely summarize the issue in one or two sentences</Description>
        {<Error>{errors.title}</Error>}
      </Row>
      <Row>
        <Label htmlFor="description">Description</Label>
        <Editor
          defaultValue={formik.values.description}
          value={formik.values.description}
          onChange={(html) => formik.setFieldValue('description', html)}
        />
        <Description>Describe the project in as much detail as you'd like</Description>
        {<Error></Error>}
      </Row>
      <Row>
        <Label htmlFor="reporter">Reporter</Label>
        <UserSelect
          defaultValue={formik.values.reporterId}
          onChange={(reporterId) => formik.setFieldValue('reporterId', reporterId)}
          styles={grayStyles}
          placeholder="Select reporter..."
        />
        {<Error></Error>}
      </Row>
      <Row>
        <Label htmlFor="assigneeIds">Assignees</Label>
        <UserSelect
          defaultValue={formik.values.assigneeIds}
          onChange={(assigneeIds) => formik.setFieldValue('assigneeIds', assigneeIds)}
          placeholder="Select assignees..."
          styles={grayStyles}
          isMulti
        />
        {<Error></Error>}
      </Row>
      <Row>
        <Label htmlFor="priority">Priority</Label>
        <Select
          options={ISSUE_PRIORITIES as IOption[]}
          defaultValue={formik.values.priority}
          onChange={(priority) => formik.setFieldValue('priority', priority)}
          styles={grayStyles}
          components={{
            DropdownIndicator: components.DropdownIndicator,
          }}
        />
        {<Error>{errors.priority}</Error>}
      </Row>
      <Row>
        <FlexRow>
          <Button disabled={isLoading || !isValid} className="primary" type="submit">
            Create Issue
          </Button>
          <Button className="link" onClick={handleClose}>
            Cancel
          </Button>
        </FlexRow>
      </Row>
    </form>
  );
};

export default CreateIssue;
