import React from 'react'
import { UserAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({children}) => {
const {user} = UserAuth();

console.log("I Am ProRoute "+user.email)
if(!user)
{
    return <Navigate to='/' />
}
  return children;
}

export default ProtectedRoute;
