import { FormikProvider, useFormik } from 'formik';
import { FC } from 'react';

import { Project, ProjectSettings } from 'types/project';
import { useUpdateProjectMutation } from 'features/project/api';
import { Button } from 'components/controls/Button';
import { Description, Error, Label, Row } from 'components/controls/Form';
import Editor from 'components/controls/Editor/Editor.component';
import { ProjectSettingsSchema } from './project-settings.schema';
import { Container, Input } from './Settings.styled';
import { Category } from '../Category';

type SettingsProps = {
  project: Project;
};

const Settings: FC<SettingsProps> = ({ project }) => {
  const [updateProject, { isLoading }] = useUpdateProjectMutation();

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
      <FormikProvider value={formik}>
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
            <Category />
            {<Error>{errors.category}</Error>}
          </Row>
          <Row>
            <Button disabled={isLoading || !isValid} type="submit" className="primary">
              Update settings
            </Button>
          </Row>
        </form>
      </FormikProvider>
    </Container>
  );
};

export default Settings;
