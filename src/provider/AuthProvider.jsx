import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.config';

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {

    const [loading, setLoading]= useState(true);
    const [user, setUser]= useState(null)

    const registerWithEmailPassword = (email, password,name) => {
        console.log(email, password, name)
        return createUserWithEmailAndPassword(auth, email, password, name)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
          
                setUser(currentUser)
                setLoading(false)
            
        });
        return ()=>{
           unSubscribe()
        }
        
    },[])
    const authData = {
        registerWithEmailPassword,
        setUser,
        user
    }
    return <Authcontext value={authData}>
        {children}
    </Authcontext>
};

export default AuthProvider;