import { useGetIssuesQuery, useUpdateIssueStatusMutation } from 'features/issue/api';
import { BOARD_COLUMNS } from 'features/issue/issue.constants';
import {
  calculateIssuePosition,
  filterIssuesByStatus,
  isPositionChanged,
} from 'features/issue/issue.utils';
import { FilterContext } from 'features/project/contexts/Filters.context';
import { FC, useContext } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { IssueStatus } from 'types/issue';

import { Lists } from './Board.styled';
import List from './List.component';

const boardColumnsByStatus = Object.keys(BOARD_COLUMNS) as IssueStatus[];

const Board: FC = () => {
  const { filter, hasFilter } = useContext(FilterContext);
  const { data: issues = [] } = useGetIssuesQuery(filter);
  const [updateIssueStatus] = useUpdateIssueStatusMutation();

  const handleDragEnd = (result: DropResult) => {
    const { draggableId, destination } = result;

    if (isPositionChanged(result)) {
      updateIssueStatus({
        id: parseInt(draggableId),
        status: destination!.droppableId as IssueStatus,
        position: calculateIssuePosition(issues, result),
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Lists>
        {boardColumnsByStatus.map((status) => (
          <List
            isDragDisabled={hasFilter}
            issues={filterIssuesByStatus(issues, status)}
            key={status}
            status={status}
            totalCount={8}
          />
        ))}
      </Lists>
    </DragDropContext>
  );
};

export default Board;
