import React, { useState } from "react";
import { auth } from "../../services/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password);
    }

    return (
        <div>
            <form onSubmit={signUp}>
                <h1>Sign up</h1>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <button type="submit">Registrastes &#128139; </button>
            </form>
        </div>
    )
};

export default SignUp;