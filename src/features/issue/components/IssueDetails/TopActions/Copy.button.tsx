import { useState } from 'react';
import Icon from 'components/common/Icon';
import Button from 'components/controls/Button';

const CopyButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    if (!copied) {
      setCopied(true);
      setTimeout(() => setCopied(false), 700);
    }
  };

  return (
    <Button className="link" onClick={handleCopyClick}>
      <Icon name="link" size={18} top={1} left={-2} />
      {copied ? 'Link Copied' : 'Copy link'}
    </Button>
  );
};

export default CopyButton;
