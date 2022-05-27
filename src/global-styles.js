import { createGlobalStyle } from 'styled-components';

import styled from 'styled-components';

const GlobalStyles = createGlobalStyle`


  *:focus {
  outline: 0;
  outline: none;
  }

  ::selection {
  background-color: var(--clr-primary) ;
  color: var(--clr-black) ;
}
  a {
    color: var(--clr-primary) ;
  }
  a, button {
    cursor: pointer;
  }

  a, input, textarea, button {
    outline: none;
    text-decoration: none;
    font-family: inherit;
  }
  ul {
  list-style: none;
}

`;

export const TitlePage = styled.h2`
  margin: 3rem 0;
  text-transform: capitalize;
  text-transform: uppercase;
  color: var(--clr-black);
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: ${(props) => props.justifyContent};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Navigation = styled(FlexContainer)`
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: calc(100% - 20px);
`;
export const ContentWrapper = styled.div`
  padding: 50px 10px;
`;

export const setBackground = ({
  img = './images/header-img.jpg',
  color = 'rgba(0,0,0,0)',
} = {}) => {
  return `background:linear-gradient(${color},${color}), url(${img}) bottom / cover fixed no-repeat;`;
};
export const Container = styled.main`
  width: 90vw;
  max-width: var(--max-width);
  display: grid;
  grid-gap: 2rem;
  gap: 2rem;
  margin: 0 auto;
  padding-bottom: 5rem;
  z-index: 100;
  @media screen and (max-width: 1024px) {
    position: relative;
    z-index: 100;
  }
  @media screen and (max-width: 720px) {
    /* grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); */
    position: relative;
    z-index: 100;
  }
`;
export default GlobalStyles;
