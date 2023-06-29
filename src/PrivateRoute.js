import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      element={currentUser ? <Component /> : <Navigate to="/Home" />}
    />
  );
};

export default PrivateRoute;

