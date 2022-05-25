import React from 'react';
import HeroHeaderContent from './HeroHeaderContent';
import PlateImg from '../images/plate.png';
import styled from 'styled-components';

const Hero = () => {
  return (
    <>
      <HeroStyled>
        <HeroHeaderContent
          caption1="Food Recipes"
          caption2="for you"
          title="So you will not "
          titleBold="Burn your food"
        ></HeroHeaderContent>
        <Plate>
          <img src={PlateImg} alt="plate" />
        </Plate>
      </HeroStyled>
    </>
  );
};
const HeroStyled = styled.div`
  min-height: 65vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* @media screen and (max-width: 1024px) {
    flex-direction: column;
    min-height: 50vh;
    justify-content: space-around;
  } */
  @media screen and (max-width: 720px) {
    flex-direction: column;
    min-height: 50vh;
    justify-content: space-around;
  }
`;
const Plate = styled.div`
  position: relative;
  img {
    position: absolute;
    z-index: 10;
    right: 0;
    top: 0;
    top: -15rem;
    max-width: 65rem;
    filter: drop-shadow(rgba(141, 141, 141, 0.5) 1px 30px 30px);
    -webkit-filter: drop-shadow(rgba(141, 141, 141, 0.5) 1px 30px 30px);
    @media screen and (max-width: 720px) {
      max-width: 40rem;
    }
  }
`;
export default Hero;
