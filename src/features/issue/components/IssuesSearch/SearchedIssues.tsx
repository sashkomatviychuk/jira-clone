import { FC, useContext } from 'react';
import { Column, Container, EmptyIssuesList, Issue, Type } from './SearchedIssues.styled';
import { useGetIssuesQuery } from 'features/issue/api';
import { FilterContext } from 'features/project/contexts/Filters.context';
import IssueTypeIcon from '../IssueTypeIcon/IssueTypeIcon.component';
import { isEmpty } from 'lodash';

const SearchedIssues: FC = () => {
  const { filter } = useContext(FilterContext);
  const { data: issues = [] } = useGetIssuesQuery(filter);
  const noIssues = isEmpty(issues);

  // todo: move Issue as a separate component

  return (
    <Container>
      {noIssues && <EmptyIssuesList>No results</EmptyIssuesList>}
      {issues.map((issue) => (
        <Issue to={`/project/issue/${issue.id}`} key={issue.id}>
          <IssueTypeIcon type={issue.type} size={18} />
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
