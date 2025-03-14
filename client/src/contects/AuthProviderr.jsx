// firebase authentication
import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();


const AuthProviderr = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginwithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleprovider)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      // console.log(currentUser);
      setUser(currentUser)
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    }
  },[])

  const authInfo = {
    user,
    createUser,
    loginwithGoogle,
    loading,
    login,
    logOut
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProviderr