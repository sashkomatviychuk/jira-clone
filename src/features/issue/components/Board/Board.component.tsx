import { FC, useContext } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { Lists } from './Board.styled';
import List from './List.component';
import { useGetIssuesQuery, useUpdateIssueStatusMutation } from 'features/issue/api';
import { FilterContext } from 'features/project/contexts/Filters.context';
import {
  calculateIssuePosition,
  filterIssuesByStatus,
  isPositionChanged,
} from 'features/issue/issue.utils';
import { IssueStatus } from 'types/issue';
import { BOARD_COLUMNS } from 'features/issue/issue.constants';

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
            key={status}
            status={status}
            issues={filterIssuesByStatus(issues, status)}
            totalCount={8}
            isDragDisabled={hasFilter}
          />
        ))}
      </Lists>
    </DragDropContext>
  );
};

export default Board;
