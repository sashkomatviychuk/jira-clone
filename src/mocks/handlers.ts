import { DefaultBodyType, delay, http, HttpResponse, PathParams } from 'msw';
import { Project } from 'types/project';

import { projectEntry } from './data';
import {
  createIssue,
  createIssueComment,
  deleteIssue,
  deleteIssueComment,
  getIssue,
  getIssues,
  getProject,
  updateIssue,
} from './helpers';
import {
  CreateCommentPayload,
  CreateIssuePayload,
  UpdateIssuePayload,
  UpdateProjectPayload,
} from './models';

type ParamById = {
  id: string;
};

type DeleteCommentParams = {
  commentId: string;
} & ParamById;

export const handlers = [
  http.get('/api/issues', ({ request }) => {
    const url = new URL(request.url);
    const assigneeIds = url.searchParams.getAll('userIds').map((v) => parseInt(v));
    const query = url.searchParams.get('search') || '';

    return HttpResponse.json(
      getIssues({
        query,
        assigneeIds,
      })
    );
  }),

  http.post<PathParams, CreateIssuePayload>('/api/issues', async ({ request }) => {
    const payload = await request.json();
    const issue = createIssue(payload);

    return HttpResponse.json(issue);
  }),

  http.get<ParamById>('/api/issue/:id', ({ params }) => {
    const id = parseInt(params.id);
    const issue = getIssue(id);

    if (!issue) {
      return HttpResponse.json(
        {
          error: 'Issue not found',
        },
        {
          status: 404,
        }
      );
    }

    return HttpResponse.json(issue);
  }),

  http.put<ParamById, UpdateIssuePayload>('/api/issue/:id', async ({ params, request }) => {
    const id = parseInt(params.id);
    const payload = await request.json();
    const issue = updateIssue(id, payload);

    if (!issue) {
      return HttpResponse.json(
        {
          error: 'Issue not found',
        },
        {
          status: 404,
        }
      );
    }

    return HttpResponse.json(issue);
  }),

  http.delete<ParamById>('/api/issue/:id', ({ params }) => {
    const result = deleteIssue(parseInt(params.id));

    return HttpResponse.json({ result });
  }),

  http.get<PathParams, DefaultBodyType, Project>('/api/project', () => {
    return HttpResponse.json(getProject());
  }),

  http.put<PathParams, UpdateProjectPayload, Project>('/api/project', async ({ request }) => {
    const data = await request.json();

    Object.assign(projectEntry, data);

    await delay(300);

    return HttpResponse.json(getProject());
  }),
];

http.post<ParamById, CreateCommentPayload>(
  '/api/issue/:id/comments',
  async ({ params, request }) => {
    const issueId = parseInt(params.id);
    const payload = await request.json();
    const comment = createIssueComment({ ...payload, issueId });

    if (!comment) {
      return HttpResponse.json(
        {
          error: 'Issue not found',
        },
        {
          status: 404,
        }
      );
    }

    return HttpResponse.json(comment);
  }
);

http.delete<DeleteCommentParams>('/api/issue/:id/comment/:commentId', async ({ params }) => {
  const issueId = parseInt(params.id);
  const commentId = parseInt(params.commentId);

  const result = deleteIssueComment({ commentId, issueId });

  return HttpResponse.json({ result });
});
