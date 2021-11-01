import styled from 'styled-components';

export const Container = styled.main`
  background-color: #333;
  background-image: radial-gradient(#333, #222);

  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const WrapperBox = styled.section`
  display: grid;
  grid-auto-flow: row;
  row-gap: 1rem;
  margin: auto;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  max-width: 1024px;
`;
