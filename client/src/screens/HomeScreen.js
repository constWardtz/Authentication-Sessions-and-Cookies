import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <h1>Welcome Bro!</h1>
      <Link to="/login">
        <button>Log In</button>
      </Link>
      <Link to="register">
        <button>Sign Up</button>
      </Link>
    </div>
  );
};

export default HomeScreen;
