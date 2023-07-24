import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./FooterStyled";

const Footer = () => {
    return(
      <Container>
        <nav>
          <ul>
            <li><Link to="/home" className="link">TIENDA</Link></li>
            <li><Link to="/categories/men's clothing" className="link">HOMBRE</Link></li>
            <li><Link to="/categories/women's clothing" className="link">MUJER</Link></li>
            <li><Link to="/categories/electronics" className="link">ELECTRÓNICO</Link></li>
            <li><Link to="/categories/jewelery" className="link">JOYERÍA</Link></li>
          </ul>
        </nav>
      </Container>
    );
};

export default Footer;