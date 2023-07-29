import { Link } from "react-router-dom";
import { Container } from "./HeaderStyled"
import React from "react";
import logo from "../../img/TFK.png"
import account from "../../img/abstract-user-flat-1.svg"
import cart from "../../img/shopping-bag-svgrepo-com.svg"

const Header = () => {
  
  return (
    <Container>
        <div className="web-title">
          <Link to="/home" className="logo"><img src={logo} alt="Logo Tienda La Feka" className="logo"/></Link>
          <h5>Para los más reales</h5>
        </div>
        <div className="navbar">
          <Link to="/" className="link"><img src={account} alt="Cuenta" /></Link>
          <Link to="/cart" className="link"><img src={cart} alt="Carrito"/></Link>
        </div>
    </Container>
  );
};

export default Header;