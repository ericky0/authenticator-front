import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface RoutesPropData extends RouteProps {
}

const AdminRoutes: React.FC<RoutesPropData> = ({...rest }) => {
    const context = useAuth();
    if (!context.userLogged) {
        return <Redirect to="/" />
    }
    if(!context.adminLogged) {
        return <Redirect to="/" />
    }

    

    
    return (
        <Route {...rest} />
     )
}

export default AdminRoutes;