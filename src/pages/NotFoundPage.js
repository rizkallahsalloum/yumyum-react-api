import React from 'react';
import { LinkButton } from '../components/Button';
import { Container } from '../global-styles';
import HeaderInside from '../components/HeaderInside';

const NotFound = () => {
  return (
    <>
      <HeaderInside />
      <Container>
        <div className="spacer-10">
          <h2>Error page not found</h2>
          <LinkButton to="/">back to home page</LinkButton>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
