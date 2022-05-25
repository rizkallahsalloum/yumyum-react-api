import React from 'react';
import { Container } from '../global-styles';
import HeaderInside from '../components/HeaderInside';

const About = () => {
  return (
    <>
      <HeaderInside />
      <Container>
        <div className="spacer-10">
          <h2>About</h2>
        </div>
      </Container>
    </>
  );
};

export default About;
