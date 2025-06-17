import React, { use } from 'react';
import { Authcontext } from '../Components/Context/Authcontext';
import { Navigate } from 'react-router';

const Privateroute = ({children}) => {
  const{user}=use(Authcontext);
      if(!user){
        return <Navigate to='/login'></Navigate>
    }

    return children;
        
    
};

export default Privateroute;