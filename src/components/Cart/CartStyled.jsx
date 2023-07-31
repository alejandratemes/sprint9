import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartList = styled.div`
  width: 100%;
  max-width: 31.25em;
  margin-bottom: 1.25em;
`;

export const CartSummary = styled.div`
  width: 100%;
  max-width: 31.25em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartItem = styled.div`
  display: flex;
  margin-bottom: 1.25em;
  padding-bottom: 0.625em; /* 10px / 16px */
  border-bottom: 1px solid #F28A6C;

  img {
    max-width: 8em;
    margin-right: 0.625em;
  }

  .item-details {
    flex: 1;

    h3 {
      margin: 0;
    }
  }

  .quantity-controls {
    display: flex;
    align-items: center;

    button {
      margin: 0 0.3125em;
    }
  }
`;
