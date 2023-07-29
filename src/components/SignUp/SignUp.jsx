import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../services/authContext";
import { auth, signOut } from "../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Container } from "./SignUpStyled"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { authUser } = useAuth(); // Accede al estado de autenticación desde el contexto

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Cierre de sesión exitoso");
      })
      .catch((error) => console.log(error));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Implementar la lógica para crear una cuenta con auth.createUserWithEmailAndPassword() de Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setError("");
        // Implementar la lógica para redirigir al usuario después de crear la cuenta exitosamente
        // Por ejemplo, redirigirlo a la página de inicio "home"
      })
      .catch((error) => {
        setError("Error al crear la cuenta");
      });
  };

  // Si el usuario ha iniciado sesión, mostrar mensaje de bienvenida
  if (authUser) {
    return (
      <Container>
        <p>{`Estás en tu cuenta '${authUser.email}' ¿Quieres cerrar sesión?`}</p>
        <button onClick={userSignOut}>Cerrar sesión</button>
      </Container>
    );
  }

  return (
    <Container>
      <form onSubmit={handleSignUp}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Registrarse</button>
        <Link to="/" className="link">¿Ya tienes una cuenta? Inicia sesión</Link>
      </form>
      <p>{error}</p>
    </Container>
  );
};

export default SignUp;
