import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "../firebase";

const Login = () => {
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .catch(error=>alert(error.message));
    }
   
    return(
        <div className="login">
            <div className="login__logo">
                <h1>Hello, Friend!</h1>
                <p>Login with Google</p>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;