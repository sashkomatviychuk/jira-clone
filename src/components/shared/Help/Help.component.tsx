import Icon from 'components/common/Icon';
import { Button } from 'components/controls/Button';
import Tooltip from 'rc-tooltip/lib/Tooltip';
import { FC, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';

import HelpContainer from './HelpContent.component';

const Help: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Tooltip align={{ offset: [0, 0] }} overlay="Help" placement="top">
        <Button className="icon round" onClick={() => setIsOpen(!isOpen)}>
          <Icon name="help" />
        </Button>
      </Tooltip>
      {isOpen && (
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
          <>
            <HelpContainer />
          </>
        </ClickAwayListener>
      )}
    </>
  );
};

export default Help;
