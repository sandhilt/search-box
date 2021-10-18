import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border: none;
  box-shadow: none;
  background-color: #222;
  color: #fff;
  border-radius: 1rem;
  padding: 0.5rem;

  transition-property: all;
  transition-duration: 500ms;

  :hover,
  :focus {
    background-color: #fff;
    color: #222;
  }
`;
