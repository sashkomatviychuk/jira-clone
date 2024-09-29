import { Divider } from 'components/shared/Sidebar';
import { FC, memo } from 'react';

import Status from '../Status';
import Assignees from './Assignees';
import Dates from './Dates';
import Estimate from './Estimate';
import { Right } from './IssueDetails.styled';
import Priority from './Priority';
import Reporter from './Reporter';

const IssueAside: FC = () => {
  return (
    <Right>
      <Status />
      <Reporter />
      <Assignees />
      <Priority />
      <Estimate />
      <Divider />
      <Dates />
    </Right>
  );
};

export default memo(IssueAside);
