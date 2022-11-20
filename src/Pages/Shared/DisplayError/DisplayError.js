import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {

    const error = useRouteError();
    const { logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <p className='text-red-500'>Something went wrong</p>
            <p className='text-red-400'>{error.StatusText || error.message}</p>
            <div className="text-3xl">Please <button onClick={handleLogOut}>Sign out</button> and log back in</div>
        </div>
    );
};

export default DisplayError;