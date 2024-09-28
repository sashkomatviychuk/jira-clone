import { FC } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { Issue, IssueStatus } from 'types/issue';
import {
  Column,
  Title,
  Issue as StyledIssue,
  IssuesContainer,
  Name,
  Bottom,
  Assignees,
  Assignee,
} from './Board.styled';
import IssueTypeIcon from '../IssueTypeIcon/IssueTypeIcon.component';
import { columnNames, sortIssuesByPosition } from 'app/issue/issue.service';
import { Row } from 'components/common/Row';
import IssuePriorityIcon from '../IssuePriorityIcon';

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
            to={`/project/issue/${issue.id}`}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Name>{issue.title}</Name>
            <Bottom>
              <Row>
                <IssueTypeIcon type={issue.type} size={18} left={-2} />
                <IssuePriorityIcon type={issue.priority} size={18} left={-6} />
              </Row>
              <Assignees>
                {issue.assignees.map((assignee) => (
                  <Assignee
                    key={assignee.id}
                    name={assignee.name}
                    url={assignee.avatarUrl}
                    size={20}
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
    <Droppable key={status} droppableId={status} type="COLUMN">
      {(provided) => {
        return (
          <Column ref={provided.innerRef} {...provided.droppableProps}>
            <Title>
              {columnNames[status]} <span style={{ textTransform: 'lowercase' }}>{countInfo}</span>
            </Title>
            <IssuesContainer>
              {sorted.map((issue, index) => (
                <IssueComponent
                  key={issue.id}
                  index={index}
                  issue={issue}
                  isDragDisabled={isDragDisabled}
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
