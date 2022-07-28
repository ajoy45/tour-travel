import React from 'react';
import { signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase.ini';
const Logout = () => {
     
    const remove=()=>{
        signOut(auth)
    }
    return [remove]
};

export default Logout;