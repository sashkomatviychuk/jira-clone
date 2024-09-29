import { FC, memo } from 'react';

import { ProjectInfoProps } from './interfaces';
import { ReactComponent as Avatar } from './project-avatar.svg';
import { AvatarContainer, Category, Details, Name, ProjectInfoStyled } from './ProjectInfo.styled';

const ProjectInfo: FC<ProjectInfoProps> = ({ name, category }) => {
  return (
    <ProjectInfoStyled>
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
      <Details>
        <Name>{name}</Name>
        <Category>{category} project</Category>
      </Details>
    </ProjectInfoStyled>
  );
};

export default memo(ProjectInfo);
