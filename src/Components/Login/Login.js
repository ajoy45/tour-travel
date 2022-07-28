import React, { useState } from 'react';
import './Login.css';
import Row from 'react-bootstrap/Row';
import { useLocation, useNavigate } from "react-router-dom";
import auth from '../Firebase/Firebase.ini';
import {  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Social from '../Social/Social';

const Login = () => {
    const[googleSingIn]=Social()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handelToResister=()=>{
        navigate('/singup')
    }
    const [
        signInWithEmailAndPassword,
        
        
      ] = useSignInWithEmailAndPassword(auth);
    
    const handelToLogin= event=>{
             event.preventDefault()
             setEmail(event.target.email.value)
             setPassword(event.target.password.value)
             signInWithEmailAndPassword(email,password)
             navigate(from, { replace: true });
    }
    return (
        <div className='w-50 mx-auto p-5'>
            <h1 className='text-center text-color'>LOGIN </h1>
            <Row xs={1}>
                <form  onSubmit={handelToLogin}>
                    <input className='w-100 p-2 mb-3' type="email" name="email" placeholder='Email' /><br></br>
                    <input className='w-100 p-2 mb-3' type="password" name='password' placeholder='Password' /><br></br>
                    <input className='w-100 p-2 mb-3 btn btn-primary' type="submit" value="Login" />
                </form>
                <p onClick={handelToResister} className='text-center text-danger pointer'>New To Tour?</p>
                <div className="text-center">
                    <button onClick={googleSingIn}
                        className="btn btn-primary text-center"
                    >
                        <i className="fab fa-google"></i> Google Sign In
                    </button>
                </div>
            </Row>
        </div>
    );
};

export default Login;