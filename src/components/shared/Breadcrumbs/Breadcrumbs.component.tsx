import { FC, Fragment } from 'react';
import { Container, Divider } from './Breadcrumbs.styled';
import { BreadcrumbsProps } from './interfaces';

const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <Container>
      {items.map((item, idx) => (
        <Fragment key={idx}>
          {idx !== 0 && <Divider>/</Divider>}
          {item}
        </Fragment>
      ))}
    </Container>
  );
};

export default Breadcrumbs;
