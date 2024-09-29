import { FC, memo } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';

import { Container, Row } from './Dates.styled';
import { useGetIssueQuery } from 'features/issue/api';

const Dates: FC = () => {
  const { issueId } = useParams();

  const { data: issue } = useGetIssueQuery(parseInt(issueId!));

  return (
    <Container>
      <Row>Created at {issue && moment(issue.createdAt).fromNow()}</Row>
      <Row>Updated at {issue && moment(issue.updatedAt).fromNow()}</Row>
    </Container>
  );
};

export default memo(Dates);
