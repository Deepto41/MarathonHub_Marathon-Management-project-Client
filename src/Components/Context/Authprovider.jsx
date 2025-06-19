import React, { useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.init';
import { signInWithEmailAndPassword } from 'firebase/auth/cordova';


const Authprovider = ({children}) => {
const [user,setUser]=useState(null);
const auth = getAuth(app);

const [loading, setLoading] = useState(true);


const createNewUser=(email,password)=>{
 return createUserWithEmailAndPassword(auth,email,password)
}

const logIn=(email,password)=>{
    return signInWithEmailAndPassword(auth , email ,password)
}

const logOut=()=>{
return signOut(auth)
}




useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,currentUser  =>{
    console.log('current user', currentUser);
    //  setLoading(false);
  
    if (currentUser) {
        setUser(currentUser,{
          name: currentUser.displayName,
          email: currentUser.email,
        });
      } else {
        setUser(null);
      }
    })
    
    return ()=>{
      unSubscribe()
    }
  },[]);

  const authData ={
    createNewUser,
    setUser,
    user,
    logOut,
    setLoading,
    loading,
    logIn
}

    return <Authcontext value={authData}>{children}</Authcontext>
};

export default Authprovider;