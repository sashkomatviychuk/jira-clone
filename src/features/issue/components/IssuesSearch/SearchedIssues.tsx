import { useGetIssuesQuery } from 'features/issue/api';
import { FilterContext } from 'features/project/contexts/Filters.context';
import { isEmpty } from 'lodash';
import { FC, useContext } from 'react';

import IssueTypeIcon from '../IssueTypeIcon/IssueTypeIcon.component';
import { Column, Container, EmptyIssuesList, Issue, Type } from './SearchedIssues.styled';

const SearchedIssues: FC = () => {
  const { filter } = useContext(FilterContext);
  const { data: issues = [] } = useGetIssuesQuery(filter);
  const noIssues = isEmpty(issues);

  // todo: move Issue as a separate component

  return (
    <Container>
      {noIssues && <EmptyIssuesList>No results</EmptyIssuesList>}
      {issues.map((issue) => (
        <Issue key={issue.id} to={`/project/issue/${issue.id}`}>
          <IssueTypeIcon size={18} type={issue.type} />
          <Column>
            <span>{issue.title}</span>
            <Type>
              {issue.type}-{issue.id}
            </Type>
          </Column>
        </Issue>
      ))}
    </Container>
  );
};

export default SearchedIssues;
