import { Project, ProjectSettings } from 'app/project/project.interfaces';
import { api } from '../shared/api';

export const projectApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProject: build.query<Project, void>({
      query: () => 'project',
      providesTags: (result) => [{ type: 'Project', id: result?.id }],
    }),
    updateProject: build.mutation<Project, ProjectSettings>({
      query: (payload) => ({
        url: 'project',
        method: 'PUT',
        body: payload,
      }),
      invalidatesTags: ['Project'],
    }),
  }),
});

export const { useGetProjectQuery, useUpdateProjectMutation } = projectApi;
