import React, { use } from 'react';
import { Authcontext } from '../Components/Context/Authcontext';
import { Navigate } from 'react-router';

const Privateroute = ({children}) => {
  const{user,loading}=use(Authcontext);

    if (loading) {
 
    return (
      <div className="flex justify-center items-center min-h-screen">
       <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  
      if(!user){
        return <Navigate to='/login'></Navigate>
    }

    return children;
        
    
};

export default Privateroute;