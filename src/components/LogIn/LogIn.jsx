import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../services/authContext";
import { auth, signOut } from "../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Container } from "./LogInStyled"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { authUser } = useAuth(); 

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Cierre de sesión exitoso");
      })
      .catch((error) => console.log(error));
  };
  
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setError("");
        // Implementar la lógica para redirigir al usuario después del inicio de sesión exitoso
        // Por ejemplo, redirigirlo a la página de inicio "home"
      })
      .catch((error) => {
        setError("Credenciales inválidas");
      });
  };

  // Si el usuario ha iniciado sesión, mostrar mensaje de bienvenida
  if (authUser) {
    return (
      <Container>
        <p>{`Estás en tu cuenta ${authUser.email}`}</p>
        <Link to="/"><button onClick={userSignOut}>Cerrar sesión</button></Link>
      </Container>
    );
  }

  // Usuario no ha iniciado sesión, mostrar el formulario de inicio de sesión
  return (
    <Container>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Iniciar Sesión</button>
        <Link to="/signup" className="link">¿No tienes una cuenta? Regístrate</Link>
      </form>
      <p>{error}</p>
      
    </Container>
  );
};

export default Login;
