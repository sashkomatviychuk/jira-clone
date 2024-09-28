import { DefaultBodyType, PathParams, rest } from 'msw';
import {
  getIssue,
  getProject,
  getIssues,
  deleteIssue,
  updateIssue,
  createIssue,
  createIssueComment,
  deleteIssueComment,
} from './helpers';
import { project } from './data';
import { Project } from 'app/project/project.interfaces';
import {
  CreateCommentPayload,
  CreateIssuePayload,
  IssuesFilter,
  UpdateIssuePayload,
  UpdateProjectPayload,
} from './models';

export const handlers = [
  rest.get('/api/issues', (req, res, ctx) => {
    const assigneeIds = req.url.searchParams.getAll('userIds').map((v) => parseInt(v));

    const filter: IssuesFilter = {
      query: req.url.searchParams.get('search') || '',
      assigneeIds,
    };

    return res(ctx.json(getIssues(filter)));
  }),

  rest.post('/api/issues', async (req, res, ctx) => {
    const payload = await req.json<CreateIssuePayload>();
    const issue = createIssue(payload);

    return res(ctx.json(issue));
  }),

  rest.get('/api/issue/:id', (req, res, ctx) => {
    const id = req.params.id;
    const issue = getIssue(parseInt(id as string));

    if (!issue) {
      return res(
        ctx.status(404),
        ctx.json({
          error: 'Issue not found',
        })
      );
    }

    return res(ctx.json(issue));
  }),

  rest.put('/api/issue/:id', async (req, res, ctx) => {
    const id = parseInt(req.params.id as string);
    const payload = await req.json<UpdateIssuePayload>();
    const issue = updateIssue(id, payload);

    if (!issue) {
      return res(
        ctx.status(404),
        ctx.json({
          error: 'Issue not found',
        })
      );
    }

    return res(ctx.json(issue));
  }),

  rest.delete('/api/issue/:id', (req, res, ctx) => {
    const id = req.params.id;
    const result = deleteIssue(parseInt(id as string));

    return res(ctx.json({ result }));
  }),

  rest.get<DefaultBodyType, PathParams, Project>('/api/project', (req, res, ctx) => {
    const project = getProject();
    return res(ctx.json(project));
  }),

  rest.put<UpdateProjectPayload, PathParams, Project>('/api/project', async (req, res, ctx) => {
    const data = await req.json<UpdateProjectPayload>();

    Object.assign(project, data);

    await new Promise((resolve) => {
      setTimeout(() => resolve(true), 300);
    });

    return res(ctx.json(getProject()));
  }),
];

rest.post('/api/issue/:id/comments', async (req, res, ctx) => {
  const issueId = parseInt(req.params.id as string);
  const payload = await req.json<CreateCommentPayload>();
  const comment = createIssueComment({ ...payload, issueId });

  if (!comment) {
    return res(
      ctx.status(404),
      ctx.json({
        error: 'Issue not found',
      })
    );
  }

  return res(ctx.json(comment));
});

rest.delete('/api/issue/:id/comment/:commentId', async (req, res, ctx) => {
  const issueId = parseInt(req.params.id as string);
  const commentId = parseInt(req.params.commentId as string);

  const result = deleteIssueComment({ commentId, issueId });

  return res(ctx.json({ result }));
});
