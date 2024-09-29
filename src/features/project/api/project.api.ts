import { Project, ProjectSettings } from 'types/project';
import { api } from 'app/api';

export const projectApi = api
  .enhanceEndpoints({
    addTagTypes: ['Project'],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getProject: build.query<Project, void>({
        query: () => 'project',
        providesTags: (result) => (result?.id ? [{ type: 'Project', id: result.id }] : []),
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
