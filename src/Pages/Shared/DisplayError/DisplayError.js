import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {

    const error = useRouteError();
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <p className='text-red-500'>Something went wrong</p>
            <p className='text-red-400'>{error.StatusText || error.message}</p>
            <div className="text-3xl">Please <button className='btn btn-error' onClick={handleLogOut}>Sign out</button> and log back in</div>
        </div>
    );
};

export default DisplayError;