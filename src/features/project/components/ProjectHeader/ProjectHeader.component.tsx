import { FC } from 'react';
import { ProjectHeaderProps } from './interfaces';
import { Row, Actions } from './ProjectHeader.styled';
import Link from 'components/common/Link';
import Icon from 'components/common/Icon';

const ProjectHeader: FC<ProjectHeaderProps> = ({ name }) => {
  return (
    <Row>
      <h2>{name}</h2>
      <Actions>
        <Link to={'#'} className="secondary">
          <Icon name="github" /> <span>Github Repo</span>
        </Link>
      </Actions>
    </Row>
  );
};

export default ProjectHeader;
