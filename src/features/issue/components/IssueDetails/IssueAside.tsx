import { FC, memo } from 'react';

import { Right } from './IssueDetails.styled';
import Dates from './Dates';
import Status from '../Status';
import Priority from './Priority';
import Reporter from './Reporter';
import Assignees from './Assignees';
import { Divider } from 'components/shared/Sidebar';
import Estimate from './Estimate';

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
