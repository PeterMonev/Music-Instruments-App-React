import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../../hooks/authContext';

export const PrivateGuard = ({ children }) => {
    const { auth } = useContext(AuthContext);

    if(!auth?.accessToken){
        return <Navigate to='/login' replace={true} />
    }

    return children ? children : <Outlet />
};