import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import NotFound from "./component/notFound/NotFound";
import SignIn from "./component/signIn/SignIn";
import SignUp from "./component/signUp/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/signIn" element={<SignIn></SignIn>}></Route>
      <Route path="/signUp" element={<SignUp></SignUp>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
};

export default App;
