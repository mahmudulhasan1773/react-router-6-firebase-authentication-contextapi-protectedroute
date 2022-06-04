import firbaseConfigApp from "../firebase/firebase.config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

firbaseConfigApp();
const auth = getAuth();

const useFirebase = () => {
  const [user, setuser] = useState("");

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setuser(res.user);
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

  return {
    user,
    setuser,
    createUser,
    createSignIn,
  };
};

export default useFirebase;
