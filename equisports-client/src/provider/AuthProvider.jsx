/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
export const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, pass, name, photoURL) => {
    return createUserWithEmailAndPassword(auth, email, pass)
      .then(() => {
        const currentUser = auth.currentUser;

        return updateProfile(currentUser, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          setUser({
            ...currentUser,
            displayName: name,
            photoURL: photoURL,
          });
        });
      })
      .catch((error) => {
        throw error;
      });
  };
  const logout = () => {
    return signOut(auth);
  };
  const loginUser = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const googleProvider = new GoogleAuthProvider();

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        throw error;
      });
  };
  const authinfo = {
    user,
    loading,
    createUser,
    setUser,
    logout,
    loginUser,
    loginWithGoogle,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
