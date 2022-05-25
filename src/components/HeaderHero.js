import styled from 'styled-components';

import { setBackground } from '../global-styles';
const HeaderImg = styled.header`
  min-height: 60vh;
  height: 75rem;
  ${(props) => setBackground({ img: props.img })};
  @media screen and (max-width: 720px) {
    height: 50rem;
  }
`;

export default HeaderImg;
