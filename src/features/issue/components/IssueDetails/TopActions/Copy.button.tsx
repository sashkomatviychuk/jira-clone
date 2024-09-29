import Icon from 'components/common/Icon';
import Button from 'components/controls/Button';
import { useState } from 'react';

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
      <Icon left={-2} name="link" size={18} top={1} />
      {copied ? 'Link Copied' : 'Copy link'}
    </Button>
  );
};

export default CopyButton;
