import { Button } from 'components/controls/Button';
import Editor from 'components/controls/Editor/Editor.component';
import { Description, Error, Label, Row } from 'components/controls/Form';
import { useUpdateProjectMutation } from 'features/project/api';
import { FormikProvider, useFormik } from 'formik';
import { FC } from 'react';
import { Project, ProjectSettings } from 'types/project';

import { Category } from '../Category';
import { ProjectSettingsSchema } from './project-settings.schema';
import { Container, Input } from './Settings.styled';

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
            <Input defaultValue={formik.values.title} name="title" onChange={formik.handleChange} />
            {<Error>{errors.title}</Error>}
          </Row>
          <Row>
            <Label htmlFor="url">URL</Label>
            <Input defaultValue={formik.values.url} name="url" onChange={formik.handleChange} />
            <Description>Please provide url to you project here</Description>
            {<Error>{errors.url}</Error>}
          </Row>
          <Row>
            <Label htmlFor="description">Description</Label>
            <Editor
              defaultValue={formik.values.description}
              onChange={(html) => formik.setFieldValue('description', html)}
              value={formik.values.description}
            />
            <Description>Describe the project in as much detail as you'd like</Description>
          </Row>
          <Row>
            <Label htmlFor="category">Category</Label>
            <Category />
            {<Error>{errors.category}</Error>}
          </Row>
          <Row>
            <Button className="primary" disabled={isLoading || !isValid} type="submit">
              Update settings
            </Button>
          </Row>
        </form>
      </FormikProvider>
    </Container>
  );
};

export default Settings;
