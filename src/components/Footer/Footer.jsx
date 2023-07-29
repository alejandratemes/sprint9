import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./FooterStyled";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleBurgerClick = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

    return(
      <Container>
        {isMobile ? (
        <>
          {isBurgerMenuOpen && <BurgerMenu onClose={handleBurgerClick} />}
          <button onClick={handleBurgerClick}>☰</button>
        </>
      ) : (
        <nav>
          <ul>
            <li><Link to="/home" className="link">TIENDA</Link></li>
            <li><Link to="/categories/men's clothing" className="link">HOMBRE</Link></li>
            <li><Link to="/categories/women's clothing" className="link">MUJER</Link></li>
            <li><Link to="/categories/electronics" className="link">ELECTRÓNICOS</Link></li>
            <li><Link to="/categories/jewelery" className="link">JOYERÍA</Link></li>
          </ul>
        </nav>
      )}
      </Container>
    );
};

export default Footer;