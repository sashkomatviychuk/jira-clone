import { api } from 'app/api';
import { IOption } from 'components/controls/Select';
import {
  CreateIssuePayload,
  Issue,
  UpdateIssuePayload,
  UpdateIssuePriorityPayload,
} from 'types/issue';
import { ProjectFilter } from 'types/project';

export const issuesApi = api
  .enhanceEndpoints({
    addTagTypes: ['Issue'],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getIssue: build.query<Issue, number>({
        query: (id) => `issue/${id}`,
        providesTags: (_post, _err, id) => [{ type: 'Issue', id }],
      }),
      getIssues: build.query<Issue[], ProjectFilter>({
        query: (params) => ({ url: 'issues', params }),
        providesTags: (result = []) => [
          ...result.map(({ id }) => ({ type: 'Issue', id }) as const),
          { type: 'Issue' as const, id: 'LIST' },
        ],
      }),
      createIssue: build.mutation<Issue, CreateIssuePayload>({
        query: (payload) => ({
          url: 'issues',
          method: 'POST',
          body: payload,
        }),
        invalidatesTags: [{ type: 'Issue' as const, id: 'LIST' }],
      }),
      updateIssue: build.mutation<Issue, UpdateIssuePayload & Pick<Issue, 'id'>>({
        query: ({ id, ...payload }) => ({
          url: `issue/${id}`,
          method: 'PUT',
          body: payload,
        }),
        invalidatesTags: (result, error, { id }) => [{ type: 'Issue' as const, id }],
      }),
      updateIssueStatus: build.mutation<Issue, UpdateIssuePriorityPayload & Pick<Issue, 'id'>>({
        query: ({ id, ...payload }) => ({
          url: `issue/${id}`,
          method: 'PUT',
          body: payload,
        }),
        onQueryStarted: async ({ id, ...payload }, { dispatch, queryFulfilled }) => {
          const patchResult = dispatch(
            api.util.updateQueryData('getIssues' as never, {} as never, (draft: Issue[]) => {
              const issue = draft.find((issue) => issue.id === id);

              if (issue) {
                Object.assign(issue, payload);
              }
            })
          );

          try {
            await queryFulfilled;
          } catch {
            patchResult.undo();
          }
        },
      }),
      deleteIssue: build.mutation<any, Pick<Issue, 'id'>>({
        query: ({ id }) => ({
          url: `issue/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: () => [{ type: 'Issue' as const, id: 'LIST' }],
      }),
    }),
  });

export const {
  useGetIssuesQuery,
  useCreateIssueMutation,
  useUpdateIssueMutation,
  useUpdateIssueStatusMutation,
  useGetIssueQuery,
  useDeleteIssueMutation,
} = issuesApi;

export const issueTypes: IOption[] = [];
