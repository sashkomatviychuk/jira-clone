import Icon from 'components/common/Icon';
import { Row } from 'components/common/Row';
import { Button } from 'components/controls/Button';
import { useDeleteIssueMutation } from 'features/issue/api';
import { memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import IssueType from '../Type';
import CopyButton from './Copy.button';
import { Container } from './TopActions.styled';

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
          <Icon left={-2} name="feedback" size={18} top={1} />
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
