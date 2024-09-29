import { Row as FlexRow } from 'components/common/Row';
import Button from 'components/controls/Button';
import Editor from 'components/controls/Editor';
import { Description, Error, Label, Row } from 'components/controls/Form';
import Select, { IOption, useGrayControlStyles } from 'components/controls/Select';
import { useCreateIssueMutation } from 'features/issue/api';
import { ISSUE_PRIORITIES, ISSUE_TYPES } from 'features/issue/issue.constants';
import { IssueSchema } from 'features/issue/issue.schema';
import { useFormik } from 'formik';
import { FC } from 'react';
import { useNavigate } from 'react-router';
import { components } from 'react-select';
import { CreateIssuePayload, IssuePriority, IssueType } from 'types/issue';

import UserSelect from '../UserSelect';
import { Input } from './CreateIssue.styled';

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
          components={{
            DropdownIndicator: components.DropdownIndicator,
          }}
          defaultValue={formik.values.type as any}
          onChange={(priority) => formik.setFieldValue('type', priority)}
          options={ISSUE_TYPES as IOption[]}
          styles={grayStyles}
        />
        <Description>Start typing to get a list of possible matches.</Description>
        {<Error>{errors.type}</Error>}
      </Row>
      <Row>
        <Label htmlFor="title">Short Summary</Label>
        <Input defaultValue={formik.values.title} name="title" onChange={formik.handleChange} />
        <Description>Concisely summarize the issue in one or two sentences</Description>
        {<Error>{errors.title}</Error>}
      </Row>
      <Row>
        <Label htmlFor="description">Description</Label>
        <Editor
          defaultValue={formik.values.description}
          onChange={(html) => formik.setFieldValue('description', html)}
          value={formik.values.description}
        />
        <Description>Describe the project in as much detail as you'd like</Description>
        {<Error></Error>}
      </Row>
      <Row>
        <Label htmlFor="reporter">Reporter</Label>
        <UserSelect
          defaultValue={formik.values.reporterId}
          onChange={(reporterId) => formik.setFieldValue('reporterId', reporterId)}
          placeholder="Select reporter..."
          styles={grayStyles}
        />
        {<Error></Error>}
      </Row>
      <Row>
        <Label htmlFor="assigneeIds">Assignees</Label>
        <UserSelect
          defaultValue={formik.values.assigneeIds}
          isMulti
          onChange={(assigneeIds) => formik.setFieldValue('assigneeIds', assigneeIds)}
          placeholder="Select assignees..."
          styles={grayStyles}
        />
        {<Error></Error>}
      </Row>
      <Row>
        <Label htmlFor="priority">Priority</Label>
        <Select
          components={{
            DropdownIndicator: components.DropdownIndicator,
          }}
          defaultValue={formik.values.priority}
          onChange={(priority) => formik.setFieldValue('priority', priority)}
          options={ISSUE_PRIORITIES as IOption[]}
          styles={grayStyles}
        />
        {<Error>{errors.priority}</Error>}
      </Row>
      <Row>
        <FlexRow>
          <Button className="primary" disabled={isLoading || !isValid} type="submit">
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
