import styled, { keyframes } from 'styled-components';

const TitleAnimation = keyframes`
from {
  text-shadow: 1px 1px 5px #fff;
}

to {
  text-shadow: 1px 1px 5px #222;
}

`;

export const TitleStyled = styled.h1`
  color: #fff;
  animation-name: ${TitleAnimation};
  animation-duration: 2s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
`;
