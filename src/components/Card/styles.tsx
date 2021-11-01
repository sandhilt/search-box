import styled from 'styled-components';

export const CardStyled = styled.section`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  max-width: 200px;
  height: 200px;
  margin: 0.5rem;
  transition: box-shadow 500ms ease-in-out;

  :focus,
  :hover {
    box-shadow: 0 0 0.5rem 0.5rem rgba(255, 255, 255, 0.2);
  }
`;
