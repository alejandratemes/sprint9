import { Link } from "react-router-dom";
import { Container } from "./HeaderStyled"
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../services/firebase";

const Header = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };
  
  return (
    <Container>
        <div>
          <h1><Link to="/home" className="h1">TIENDA LA FEKA</Link></h1>
          <h5>Para los más reales</h5>
        </div>
        <div>
          <div>
            {authUser ? (
              <Link to="/" onClick={userSignOut} className="link">Cerrar sesión</Link>
            ) : (
              <Link to="/" className="link">Iniciar Sesión</Link>
            )}
          </div>
          <Link to="/cart" className="link">Carrito</Link>
        </div>
    </Container>
  );
};

export default Header;