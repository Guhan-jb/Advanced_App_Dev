import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const Token = localStorage.getItem('Token');
  if(Token!==null)
  {
    return <Outlet />;
  }
  else{
    return  <Navigate to="/" />;
  }
  
  
};

export default PrivateRoute;