import { FC, memo } from 'react';
import { ProjectInfoProps } from './interfaces';
import { ProjectInfoStyled, AvatarContainer, Details, Name, Category } from './ProjectInfo.styled';
import { ReactComponent as Avatar } from './project-avatar.svg';

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
