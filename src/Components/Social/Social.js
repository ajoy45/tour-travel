
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../Firebase/Firebase.ini';

const Social = () => {
    const navigate=useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const googleSingIn=()=>{
        signInWithGoogle()
           navigate('/')
    }
    return [googleSingIn];
};

export default Social;