import { useNavigate, useParams } from 'react-router-dom';
import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

import { Overlay, Container } from 'components/common/Modal';
import { Button } from 'components/controls/Button';
import IssueLoader from '../components/IssueLoader';
import { useGetIssueQuery } from 'app/issue/issues.api';
import IssueForm from '../components/IssueDetails/IssueForm';
import TopActions from '../components/IssueDetails/TopActions';
import { IssueContainer } from '../components/IssueDetails/IssueDetails.styled';
import IssueMain from '../components/IssueDetails/IssueMain';
import IssueAside from '../components/IssueDetails/IssueAside';

const Content = styled(Container)`
  width: 988px;
  min-height: 300px;
`;

const ModalContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Overlay>
      <Content>{children}</Content>
    </Overlay>
  );
};

const EditIssuePage = () => {
  const navigate = useNavigate();
  const { issueId } = useParams();

  const { data: issue, isLoading } = useGetIssueQuery(parseInt(issueId!));

  if (isLoading) {
    return (
      <ModalContainer>
        <IssueLoader />
      </ModalContainer>
    );
  }

  if (!issue) {
    return (
      <ModalContainer>
        <h3>Issue not found</h3>
        <Button onClick={() => navigate('/project')}>Back to project</Button>
      </ModalContainer>
    );
  }

  // Header
  // Main
  // Aside

  return (
    <ModalContainer>
      <IssueForm issue={issue}>
        <TopActions />
        <IssueContainer>
          <IssueMain />
          <IssueAside />
        </IssueContainer>
      </IssueForm>
    </ModalContainer>
  );
};

export default EditIssuePage;
