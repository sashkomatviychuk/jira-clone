import { Row } from 'components/common/Row';
import { BOARD_COLUMNS } from 'features/issue/issue.constants';
import { sortIssuesByPosition } from 'features/issue/issue.utils';
import { FC } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Issue, IssueStatus } from 'types/issue';

import IssuePriorityIcon from '../IssuePriorityIcon';
import IssueTypeIcon from '../IssueTypeIcon/IssueTypeIcon.component';
import {
  Assignee,
  Assignees,
  Bottom,
  Column,
  Issue as StyledIssue,
  IssuesContainer,
  Name,
  Title,
} from './Board.styled';

type ListProps = {
  status: IssueStatus;
  issues: Issue[];
  totalCount: number;
  isDragDisabled: boolean;
};

type IssueProps = {
  issue: Issue;
  index: number;
  isDragDisabled: boolean;
};

const IssueComponent: FC<IssueProps> = ({ issue, index, isDragDisabled }) => {
  return (
    <Draggable draggableId={issue.id.toString()} index={index} isDragDisabled={isDragDisabled}>
      {(provided) => {
        return (
          <StyledIssue
            ref={provided.innerRef}
            to={`/project/issue/${issue.id}`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Name>{issue.title}</Name>
            <Bottom>
              <Row>
                <IssueTypeIcon left={-2} size={18} type={issue.type} />
                <IssuePriorityIcon left={-6} size={18} type={issue.priority} />
              </Row>
              <Assignees>
                {issue.assignees.map((assignee) => (
                  <Assignee
                    key={assignee.id}
                    name={assignee.name}
                    size={20}
                    url={assignee.avatarUrl}
                  />
                ))}
              </Assignees>
            </Bottom>
          </StyledIssue>
        );
      }}
    </Draggable>
  );
};

export const List: FC<ListProps> = ({ status, issues, totalCount, isDragDisabled }) => {
  const issuesCount = issues.length;
  const countInfo = issuesCount === totalCount ? totalCount : `${issuesCount} of ${totalCount}`;
  const sorted = sortIssuesByPosition(issues);

  return (
    <Droppable droppableId={status} key={status} type="COLUMN">
      {(provided) => {
        return (
          <Column ref={provided.innerRef} {...provided.droppableProps}>
            <Title>
              {BOARD_COLUMNS[status]}{' '}
              <span style={{ textTransform: 'lowercase' }}>{countInfo}</span>
            </Title>
            <IssuesContainer>
              {sorted.map((issue, index) => (
                <IssueComponent
                  index={index}
                  isDragDisabled={isDragDisabled}
                  issue={issue}
                  key={issue.id}
                />
              ))}
              {provided.placeholder}
            </IssuesContainer>
          </Column>
        );
      }}
    </Droppable>
  );
};

export default List;
