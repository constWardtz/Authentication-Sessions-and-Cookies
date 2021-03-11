import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const RegisterScreen = () => {
  const { handleSubmit, register } = useForm();
  const history = useHistory();

  axios.defaults.withCredentials = true;

  const onSubmit = (data, e) => {
    const { username, email, password } = data;
    axios.post("http://localhost:8080/register", {
      username,
      email,
      password,
    });

    history.push("/login");
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="username"
          placeholder="username..."
          ref={register({ required: true })}
        />{" "}
        <br />
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
        <button type="submit">Register</button>
      </form>

      <br />
      <br />
      <p>
        Already have an account?{" "}
        <Link to="/login">
          <a href="#!">Login Here</a>
        </Link>
      </p>
    </>
  );
};

export default RegisterScreen;
