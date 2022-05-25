import React from 'react';
import styled from 'styled-components';

const HeroHeaderContent = ({
  className,
  caption1,
  caption2,
  title,
  titleBold,
  children,
}) => {
  return (
    <HeroHeaderContentStyled className={className}>
      <h1>{caption1}</h1>
      <h1>{caption2}</h1>
      <blockquote>
        {title} <span>{titleBold}</span>
      </blockquote>
      {children}
    </HeroHeaderContentStyled>
  );
};
const HeroHeaderContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  position: inherit;
  z-index: 20;

  h1 {
    font-family: var(--secondary-font-family);
    line-height: 1;
    font-size: clamp(3.5rem, 10vw + 1rem, 10rem);
  }
  blockquote {
    margin-top: 3rem;
    font-family: var(--primary-font-family);
    font-size: clamp(1.5rem, 3.5vw + 1rem, 3.5rem);
    line-height: 1.3;
    color: var(--clr-text);
    font-weight: 600;
  }
  /* blockquote {
    font-family: var(--secondary-font-family);
    font-size: 1.8rem;
    font-weight: 400;
    text-transform: capitalize;
  } */
`;
export default HeroHeaderContent;
