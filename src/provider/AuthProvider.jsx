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







// import React, { createContext, useEffect } from "react";
// import auth from "../firebase/Firebase.config";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";

// export const AuthContext = createContext();

// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//   const [loading, setLoading] = React.useState(true);
//   const [user, setUser] = React.useState(null);

//   const registerwithemailandpassword = (email, pass) => {
//     return createUserWithEmailAndPassword(auth, email, pass);
//   };

//   const handlegooglesignin = () => {
//     return signInWithPopup(auth, googleProvider);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const authData = {
//     registerwithemailandpassword,
//     handlegooglesignin,
//     setUser,
//     user,
//     loading,
//   };

//   return (
//     <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;