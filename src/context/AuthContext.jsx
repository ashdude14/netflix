import {createContext,useContext,useState} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import {auth,db} from "../Services/firebase";
import { useEffect } from "react";
const AuthContext=createContext();    

export function  AuthContextProvider({children}) {
    const [user,setUser]=useState({});

useEffect(()=>{
    const unsubs=onAuthStateChanged(auth,((currentuser)=>{
        setUser(currentuser);   
    }))
   

    return ()=>{
        unsubs();
    }
   
},[])

function signUp(email,password){
createUserWithEmailAndPassword(auth,email,password);
}

function logIn(email,password) {
    signInWithEmailAndPassword(auth,email,password);
}
function logOut(){
    return signOut(auth);
}
    return (
  <AuthContext.Provider value={{user, signUp,logIn,logOut}}>
    {children}
  </AuthContext.Provider>
    );
};

export function UserAuth(){
    return useContext(AuthContext);
}