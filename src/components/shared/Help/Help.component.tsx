import { FC, useState } from 'react';
import Tooltip from 'rc-tooltip/lib/Tooltip';
import Icon from 'components/common/Icon';
import { Button } from 'components/controls/Button';
import HelpContainer from './HelpContent.component';
import ClickAwayListener from 'react-click-away-listener';

const Help: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Tooltip overlay="Help" align={{ offset: [0, 0] }} placement="top">
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
