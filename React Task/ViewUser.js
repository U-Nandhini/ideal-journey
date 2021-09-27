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
    <div className="container py-4">
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
    <ul class="text">
      <li className="list-group-item">User ID : {user.id}</li>
      <li className="list-group-item">User name:{user.name}</li>
      <li className="list-group-item">Email ID:{user.email}</li>
      <li className="list-group-item"> Gender:{user.gender}</li>
      <li className="list-group-item">Status:{user.status}</li>
    </ul>
      {/* <table className="viewTable">
        <th>s.no</th>
        <tr>
          <td ></td>
          <td>ID</td>
          <td>{user.id}</td>
        </tr>
        <tr>
         
        <td></td>
         <td>Name</td>
          <td>{user.name}</td>
        </tr>

        <tr>
        <td></td>
          <td>Gender</td>
          <td>{user.gender}</td>
        </tr>
        <tr>
        <td></td>
          <td>Email</td>
          <td>{user.email}</td>
        </tr>
        <tr>
        <td></td>
          <td>Status</td>
          <td>{user.status}</td>
        </tr>
      </table> */}
    </div>
  );
};

export default User;
