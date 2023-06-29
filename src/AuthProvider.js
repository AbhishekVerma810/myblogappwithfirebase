import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signup = async (email, password) => {
    console.log('email===>',email,'password===>',password)
      return auth.createUserWithEmailAndPassword(email, password).then(res=>{
        console.log('sign Succefully')
         }).catch(error=>{
             console.log('errrrr=>>>>>',error);
             throw new Error();
        })
    };
    const login = (email, password) => {
    console.log(email,password)
     return auth.signInWithEmailAndPassword(email, password).then(res=>{
        console.log('user signin successfully')
      }).catch(err=>{
        console.log(err)
        throw new Error();
      })
   
   
  };

  const logout = () => {
    return auth.signOut();
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
