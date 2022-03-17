import React from 'react';
import { Navigate } from 'react-router-dom';
import { LoginService } from '../../service/LoginService';

function PrivateRoute({ children }: any) {
  return LoginService.getDataLocalStorage() ? (
    children
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
