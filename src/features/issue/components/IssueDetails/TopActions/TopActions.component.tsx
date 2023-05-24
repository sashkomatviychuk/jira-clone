import { useNavigate, useParams } from 'react-router-dom';
import { memo } from 'react';

import { Container } from './TopActions.styled';
import { Button } from 'components/controls/Button';
import Icon from 'components/common/Icon';
import { Row } from 'components/common/Row';
import IssueType from '../Type';
import { useDeleteIssueMutation } from 'app/issue/issues.api';
import CopyButton from './Copy.button';

const TopActions = () => {
  const navigate = useNavigate();
  const { issueId } = useParams();
  const [deleteIssue] = useDeleteIssueMutation();

  const handleDelete = async () => {
    if (window.confirm('Are you sure?')) {
      await deleteIssue({ id: parseInt(issueId as string) });
      navigate('/project');
    }
  };

  return (
    <Container>
      <IssueType />
      <Row>
        <Button className="link">
          <Icon name="feedback" size={18} top={1} left={-2} />
          Give feedback
        </Button>
        <CopyButton />
        <Button className="link" onClick={handleDelete}>
          <Icon name="trash" size={20} top={1} />
        </Button>
        <Button className="link" onClick={() => navigate('/project')}>
          <Icon name="close" size={24} top={1} />
        </Button>
      </Row>
    </Container>
  );
};

export default memo(TopActions);
