import styled from 'styled-components';

export const InputStyled = styled.input`
  border: 1px solid #000;
  border-radius: 1rem;
  transition: box-shadow 500ms ease-in-out;
  padding: 1rem;

  :focus,
  :hover {
    border-color: #fff;
    box-shadow: 0px 0px 25px #fff;
  }
`;
