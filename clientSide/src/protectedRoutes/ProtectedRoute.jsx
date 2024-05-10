 import React from 'react';
 import { Outlet, Navigate } from 'react-router-dom';
 import toast from 'react-hot-toast';
 
 const ProtectedRoute = ({user}) => {
    
   if(user.email !== "abdul@gmail.com"){
    toast.error("please login with admin account",{position:"bottom-center"})
    return  <Navigate to={"/"} />
   
   }
   return <Outlet/>
 }
 
 export default ProtectedRoute;