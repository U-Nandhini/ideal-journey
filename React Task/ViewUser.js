import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    gender: "",
    email: "",
    status: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`https://gorest.co.in/public/v1/users/${id}`);
    console.log(res.data.data);
    setUser(res.data.data);
  };
  return (
    <div>
      <h1>User Id: {id}</h1>
      <hr />
      <table className="viewTable">
        <tr>
          <td>ID</td>
          <td>{user.id}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{user.name}</td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>{user.gender}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{user.email}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>{user.status}</td>
        </tr>
      </table>
    </div>
  );
};

export default User;
