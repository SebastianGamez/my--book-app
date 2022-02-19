import React from 'react';
import { Redirect } from 'react-router';

export const AuthComponent = ({Component}) => {

  if(JSON.parse(sessionStorage.getItem("auth")) === true) return <Component />
  return <Redirect to="/my-book/login"/>
  
};
