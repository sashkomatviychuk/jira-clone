import { FC } from 'react';

import { Container, withModal } from 'components/common/Modal';
import CreateIssue from '../components/CreateIssue/CreateIssue.component';

const CreateIssuePage: FC = withModal('create-issue', ({ close }) => {
  return (
    <Container>
      <h2>Create a new issue</h2>
      <CreateIssue handleClose={close} />
    </Container>
  );
});

export default CreateIssuePage;
