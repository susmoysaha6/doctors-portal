import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../../hooks/useToken';

const GoogleSignIn = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    if (token) {
        navigate(from, { replace: true });
    }
    const handleGoogleSign = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <button onClick={handleGoogleSign} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default GoogleSignIn;