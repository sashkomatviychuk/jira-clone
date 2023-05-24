import { FC } from 'react';
import { ContactEmail, HelpContentStyled, Paragraph } from './Help.styled';
import Icon from 'components/common/Icon';
import Link from 'components/common/Link';

const HelpContainer: FC = () => {
  return (
    <HelpContentStyled onClick={(e) => e.stopPropagation()}>
      <img className="img" src="/img/feedback.png" alt="Feedback" />
      <Paragraph>
        This simplified Jira clone is built with React on the front-end and Node/TypeScript on the
        back-end.
      </Paragraph>
      <Paragraph>
        Read more on my website or reach out via
        <ContactEmail href="mailto:ivor@codetree.co">ivor@codetree.co</ContactEmail>
      </Paragraph>
      <Paragraph className="flex">
        <Link to={'#'} className="primary">
          Visit Website
        </Link>
        <Link to={'#'} className="secondary">
          <Icon name="github" /> <span>Github Repo</span>
        </Link>
      </Paragraph>
    </HelpContentStyled>
  );
};

export default HelpContainer;
