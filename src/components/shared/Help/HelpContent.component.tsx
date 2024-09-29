import Icon from 'components/common/Icon';
import Link from 'components/common/Link';
import { FC } from 'react';

import { ContactEmail, HelpContentStyled, Paragraph } from './Help.styled';

const HelpContainer: FC = () => {
  return (
    <HelpContentStyled onClick={(e) => e.stopPropagation()}>
      <img alt="Feedback" className="img" src="/img/feedback.png" />
      <Paragraph>
        This simplified Jira clone is built with React on the front-end and Node/TypeScript on the
        back-end.
      </Paragraph>
      <Paragraph>
        Read more on my website or reach out via
        <ContactEmail href="mailto:ivor@codetree.co">ivor@codetree.co</ContactEmail>
      </Paragraph>
      <Paragraph className="flex">
        <Link className="primary" to={'#'}>
          Visit Website
        </Link>
        <Link className="secondary" to={'#'}>
          <Icon name="github" /> <span>Github Repo</span>
        </Link>
      </Paragraph>
    </HelpContentStyled>
  );
};

export default HelpContainer;
