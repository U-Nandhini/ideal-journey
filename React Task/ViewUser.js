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
       <div className="containerList">
      <h1 className="displayID">User Id: {id}</h1>
      <hr />
    <ul class="text">
      <li className="listUser">User ID : {user.id}</li>
      <li className="listUser">User name:{user.name}</li>
      <li className="listUser">Email ID:{user.email}</li>
      <li className="listUser"> Gender:{user.gender}</li>
      <li className="listUser">Status:{user.status}</li>
    </ul>
    </div>
  );
};

export default User;
