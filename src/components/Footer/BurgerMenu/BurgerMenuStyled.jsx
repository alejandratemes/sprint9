import styled from "styled-components";
import { Link } from "react-router-dom";

export const BurgerContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4em;

    li {
      margin: 10px 0;
    }
  }
`;

export const BurgerLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;

  &:active {
    text-decoration: underline;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
`;
