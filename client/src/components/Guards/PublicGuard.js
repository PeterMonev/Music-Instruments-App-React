import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../../hooks/authContext';

export const PublicGuard = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user?.accessToken) {
        return <Navigate to="/" replace={true} />
    }

    return children ? children : <Outlet />
};