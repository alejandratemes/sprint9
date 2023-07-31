import React from "react";
import { BurgerContainer, BurgerLink, CloseButton } from "./BurgerMenuStyled";

const BurgerMenu = ({ onClose }) => {
  return (
    <BurgerContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      <ul>
        <li>
          <BurgerLink to="/home" className="link" onClick={onClose}>
            TIENDA
          </BurgerLink>
        </li>
        <li>
          <BurgerLink to="/categories/men's clothing" className="link" onClick={onClose}>
            HOMBRE
          </BurgerLink>
        </li>
        <li>
          <BurgerLink to="/categories/women's clothing" className="link" onClick={onClose}>
            MUJER
          </BurgerLink>
        </li>
        <li>
          <BurgerLink to="/categories/electronics" className="link" onClick={onClose}>
            ELECTRÓNICOS
          </BurgerLink>
        </li>
        <li>
          <BurgerLink to="/categories/jewelery" className="link" onClick={onClose}>
            JOYERÍA
          </BurgerLink>
        </li>
      </ul>
    </BurgerContainer>
  );
};

export default BurgerMenu;
