import React, { createContext, useState } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviderr = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // const signUpWithGmail = () => {
    //   return signUpWithGmail

    // }

    const authInfo = {
        createUser
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProviderr