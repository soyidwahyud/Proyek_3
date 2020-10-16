import React, { useState, useContext } from "react";
// import { AuthContext } from "../../index";
// const provider = new firebase.auth.GoogleAuthProvider();
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import "../Login.css";

const Login = ({history}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");
 
    // const Auth = useContext(AuthContext);
    const handleForm = e => {
        e.preventDefault();
 
    };
    const signUp = () => {
        window.location = '/signup'
      };
    return (
        <section id="">
            <div class="overlay">
            <form class="form form-login" onSubmit={e => handleForm(e)}> 
                <div class="con">
                    <header class="head-form">
                    <Avatar class="avatar">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    </header>
                    <div class="field-set" align="center">
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          onChange={e => setEmail(e.target.value)}
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          onChange={e => setPassword(e.target.value)}
                        />
                        <span>{error}</span>
                        <div class="text-center">
                            <button class="log-in" type="submit" name="login" className="btn btn-primary" >
                                Log In
                            </button>
                        </div>
                    </div>
                    <div class="other">
                        <button id="submit"  onClick={signUp}>Sign Up 
                            <i class="fa fa-user-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </form>
            </div>
        </section >
    );
};

export default Login;