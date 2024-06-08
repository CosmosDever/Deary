import React from 'react';

interface PrivateRouteProps {
    isAuthenticated: boolean;
    component: React.ComponentType<any>;
    path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
    isAuthenticated,
    component: Component,
    path,
}) => {
    return isAuthenticated ? <Component /> : null;
};

export default PrivateRoute;
