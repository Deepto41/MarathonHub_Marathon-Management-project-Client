import React from 'react';
import { Authcontext } from './Authcontext';

const Authprovider = ({children}) => {


    
    return <Authcontext>{children}</Authcontext>
};

export default Authprovider;