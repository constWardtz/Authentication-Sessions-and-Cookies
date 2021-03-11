import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();

  axios.defaults.withCredentials = true;
  const logout = async () => {
    const res = await axios.post("http://localhost:8080/logout");

    res && history.push("/");
  };

  return (
    <div>
      Welcome User!
      <br />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
