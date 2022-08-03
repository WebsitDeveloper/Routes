import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h5> Home </h5>
      </Link>
      <Link to="/cart">
        <h5> Cart </h5>
      </Link>
      <Link to="/signIn">
        <h5> SignIn </h5>
      </Link>
      <Link to="/signOut">
        <h5> SignOut</h5>
      </Link>
    </div>
  );
};

export default Header;
