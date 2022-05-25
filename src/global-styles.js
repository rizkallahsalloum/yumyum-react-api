import { createGlobalStyle } from 'styled-components';

import styled from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
    html {
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100vh;
  }
  body {
    font-family: var(--primary-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--clr-white);
    height: 100vh;
    font-size: 1.6rem;
    margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
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
export const Container = styled.div`
  margin: 0 15%;
  padding-bottom: 5rem;
  position: relative;
  z-index: 100;
  @media screen and (max-width: 1024px) {
    margin: 0 5%;
    position: relative;
    z-index: 100;
  }
  @media screen and (max-width: 720px) {
    margin: 0 5%;
    position: relative;
    z-index: 100;
  }
`;
export default GlobalStyles;
