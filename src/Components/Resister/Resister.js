import React, { useState } from 'react';
import './Resister.css';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Social from '../Social/Social';
import auth from '../Firebase/Firebase.ini';

const Resister = () => {
    const [googleSingIn] = Social();
    const navigate = useNavigate();
    const[user]=useAuthState(auth)
    
    
    const [
        createUserWithEmailAndPassword,
       
      ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile] = useUpdateProfile(auth);
      
    const handelToLogin = () => {
        navigate('/login')
    };

    const handelToResister = async (event) => {
        event.preventDefault()
        const name=event.target.name.value
        const email=event.target.email.value
        const password=event.target.password.value
        await createUserWithEmailAndPassword(email,password);
        await updateProfile({ displayName: name });
        alert('successfuly resister')
        if(user){
            navigate('/login')
        }
            
        
      

    }
    return (
        <div className='w-50 mx-auto p-5'>
            <h1 className='text-center text-color'>RESISTER </h1>
            <Row xs={1}>
                <form onSubmit={handelToResister}>
                    <input className='w-100 p-2 mb-3' type="text" name="name" placeholder='Name' />
                    <input className='w-100 p-2 mb-3' type="email" name="email" placeholder='Email' /><br></br>
                    <input className='w-100 p-2 mb-3' type="password" name='password' placeholder='Password' /><br></br>
                    <input className='w-100 p-2 mb-3 btn btn-primary' type="submit" value="Sing up" />
                </form>
                <p onClick={handelToLogin} className='text-center text-danger pointer'>Already have an Account?</p>
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

export default Resister;