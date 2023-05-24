import { FC, useContext } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { Lists } from './Board.styled';
import List from './List.component';
import { useGetIssuesQuery, useUpdateIssueStatusMutation } from 'app/issue/issues.api';
import { FilterContext } from 'features/project/contexts/Filters.context';
import {
  BOARD_COLUMNS,
  calculateIssuePosition,
  filterIssuesByStatus,
  isPositionChanged,
} from 'app/issue/issue.service';
import { IssueStatus } from 'app/issue/issue.interface';

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
        {BOARD_COLUMNS.map((status) => (
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
