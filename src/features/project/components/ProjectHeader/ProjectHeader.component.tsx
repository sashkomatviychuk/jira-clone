import Icon from 'components/common/Icon';
import Link from 'components/common/Link';
import { FC } from 'react';

import { ProjectHeaderProps } from './interfaces';
import { Actions, Row } from './ProjectHeader.styled';

const ProjectHeader: FC<ProjectHeaderProps> = ({ name }) => {
  return (
    <Row>
      <h2>{name}</h2>
      <Actions>
        <Link className="secondary" to={'#'}>
          <Icon name="github" /> <span>Github Repo</span>
        </Link>
      </Actions>
    </Row>
  );
};

export default ProjectHeader;
