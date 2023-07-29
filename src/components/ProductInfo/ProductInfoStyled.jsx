import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4em;
  align-items: center;
  align-self:center;
  width: 85%;
  margin: 5em auto;

    @media (max-width: 650px) {
        display: flex;
        flex-direction: column;
    }

    img {
        width: 100%;
    }

    .cart {
        background-color: #F28A6C;
        color: white;
    }
`;