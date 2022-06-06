import firbaseConfigApp from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

firbaseConfigApp();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState("");

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => setUser(result.user))
      .then((error) => console.log(error));
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        console.log(res.user);
      })
      .catch((error) => console.log("from create user ", error));
  };

  const createSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user);
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch();
  };

  return {
    handleSignOut,
    user,
    setUser,
    createUser,
    createSignIn,
    signInWithGoogle,
  };
};

export default useFirebase;
