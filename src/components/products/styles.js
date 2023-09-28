import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centralize os produtos verticalmente */
  padding: 40px 10px; /* Adicione uma margem de 2px à esquerda e à direita */

  @media (min-width: 769px) {
    /* Se você quiser manter a grade em telas maiores, adicione o seguinte: */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: start;
    grid-row-gap: 20px;
  }
`;
