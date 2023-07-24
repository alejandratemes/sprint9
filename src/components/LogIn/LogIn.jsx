import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password);

    }

    return (
        <div>
            <form onSubmit={signIn}>
                <h1>Log in</h1>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <Link to="/home"><button type="submit">Iniciar sesión</button></Link>
                <Link to="/signup" className="link"><p>¿No tienes cuenta? Regístrate, prrt&#128139;</p></Link>
            </form>
        </div>
    )
};

export default LogIn;