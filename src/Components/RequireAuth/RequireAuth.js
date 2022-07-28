
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    useLocation,
    Navigate
  } from "react-router-dom";
  import { Spinner } from 'react-bootstrap';
import auth from '../Firebase/Firebase.ini';
const RequireAuth = ({children}) => {
    let [user,loading] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
      return <Spinner className=' text-secondary ' animation="border" variant="primary" />
  }
    if (!user) {
       
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
  
      return children;
};

export default RequireAuth;