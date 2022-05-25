import React from 'react';
import styled from 'styled-components';

import headerBg from '../images/header-bg.jpg';
import HeaderImg from './HeaderHero';

import { Container } from '../global-styles';

import Nav from './Nav';
import Hero from './Hero';

const Header = () => {
  return (
    <>
      <HeaderImg img={headerBg}>
        <Container>
          <HeaderStyled>
            <Nav />
            <Hero />
          </HeaderStyled>
        </Container>
      </HeaderImg>
    </>
  );
};

const HeaderStyled = styled.header`
  padding: 4rem 0;
`;

export default Header;
