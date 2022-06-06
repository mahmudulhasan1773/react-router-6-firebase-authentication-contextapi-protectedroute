import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
const Header = () => {
  const { user, handleSignOut, signInWithGoogle } = useFirebase();
  console.log(user);
  return (
    <div className="header">
      <nav>
        <ul>
          <Link to="/home">Home</Link>
          <Link to="/signIn">sign in </Link>
          <Link to="/signUp">sign up</Link>
          {user?.uid ? (
            <button onClick={handleSignOut}>sign out</button>
          ) : (
            ""
          )}{" "}
          <b>{user?.displayName}</b>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
