import { useFormik } from 'formik';
import { FC } from 'react';
import { components } from 'react-select';

import { Project, ProjectSettings } from 'types/project';
import { useUpdateProjectMutation } from 'features/project/api/project.api';
import { Button } from 'components/controls/Button';
import { Container, Input } from './Settings.styled';
import { Description, Error, Label, Row } from 'components/controls/Form';
import Editor from 'components/controls/Editor/Editor.component';
import { ProjectSettingsSchema } from 'app/project/project.validator';
import Select, { useGrayControlStyles } from 'components/controls/Select';
import { options } from 'app/project/project-category';

type SettingsProps = {
  project: Project;
};

const Settings: FC<SettingsProps> = ({ project }) => {
  const [updateProject, { isLoading }] = useUpdateProjectMutation();
  const grayStyles = useGrayControlStyles();

  const formik = useFormik<ProjectSettings>({
    initialValues: {
      title: project.title,
      description: project.description,
      url: project.url,
      category: project.category,
    },
    onSubmit: (values) => {
      !isLoading && updateProject(values);
    },
    validationSchema: ProjectSettingsSchema,
  });
  const { errors, isValid } = formik;

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Row>
          <Label htmlFor="title">Name</Label>
          <Input defaultValue={formik.values.title} onChange={formik.handleChange} name="title" />
          {<Error>{errors.title}</Error>}
        </Row>
        <Row>
          <Label htmlFor="url">URL</Label>
          <Input defaultValue={formik.values.url} onChange={formik.handleChange} name="url" />
          <Description>Please provide url to you project here</Description>
          {<Error>{errors.url}</Error>}
        </Row>
        <Row>
          <Label htmlFor="description">Description</Label>
          <Editor
            defaultValue={formik.values.description}
            value={formik.values.description}
            onChange={(html) => formik.setFieldValue('description', html)}
          />
          <Description>Describe the project in as much detail as you'd like</Description>
        </Row>
        <Row>
          <Label htmlFor="category">Category</Label>
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
          {<Error>{errors.category}</Error>}
        </Row>
        <Row>
          <Button disabled={isLoading || !isValid} type="submit" className="primary">
            Update settings
          </Button>
        </Row>
      </form>
    </Container>
  );
};

export default Settings;
