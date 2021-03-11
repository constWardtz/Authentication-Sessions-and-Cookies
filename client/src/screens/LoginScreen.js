import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const LoginScreen = () => {
  const { handleSubmit, register } = useForm();
  const history = useHistory();

  axios.defaults.withCredentials = true;

  const onSubmit = async (data) => {
    const { email, password } = data;
    const userLoggedIn = await axios.post("http://localhost:8080/login", {
      email,
      password,
    });

    console.log(userLoggedIn);
    (await userLoggedIn.data.isAuth)
      ? history.push("/dashboard")
      : history.push("/register");
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="email"
          placeholder="email..."
          ref={register({ required: true })}
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          placeholder="password..."
          ref={register({ required: true })}
        />{" "}
        <br />
        <button type="submit">Login</button>
      </form>

      <br />
      <br />
      <p>
        You don't have an account?{" "}
        <Link to="/register">
          <a href="#!">Register Here</a>
        </Link>
      </p>
    </>
  );
};

export default LoginScreen;
