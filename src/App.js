import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import SignIn from "./components/signIn/SignIn";
import SignOut from "./components/signOut/SignOut";
import MovieCard from "./components/home/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MovieCard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signOut" element={<SignOut />} />
      </Routes>
    </>
  );
}

export default App;
