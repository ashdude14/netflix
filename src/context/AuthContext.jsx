import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth, db } from "../Services/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubs();
    };

  }, []);

  async function signUp(email, password) {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const { user } = response;
      alert('Successfully signed up as ' + user.email+" click ok to continue!");
      navigate('/home');
    } catch (err) {
      alert("User exists!");
      navigate('/login');
    }
  }

  async function logIn(email, password) {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const { user } = response;
      alert('Successfully logged in as ' + user.email+" click ok to continue!");
      navigate('/home');
    } catch (err) {
      alert(err);
      navigate('/login');
    }
  }

  function logOut() {
    return signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
