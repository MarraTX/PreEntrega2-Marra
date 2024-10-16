import React, { useEffect, useState } from "react";
import FetchingData from "./FetchingData";
import axios from "axios";

const FetchingDataContainer = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUsers = axios.get("https://jsonplaceholder.org/users");
    getUsers.then((res) => setUsers(res.data));
  }, []);
  useEffect(() => {
    const getUser = axios.get("https://jsonplaceholder.org/users/4");
    getUser.then((res) => setUser(res.data));
  }, []);
  console.log(users);

  /*   const createUser = (newUser) => {
    console.log(newUser);
    fetch("https://jsonplaceholder.org/users", {
      method: "POST",
      body: JSON.stringify(newUser),
    });
  }; */

  const createUser = (newUser) => {
    axios.post("https://jsonplaceholder.org/users", newUser);
  };
  /*   const deleteUser = (id) => {
    fetch("https://jsonplaceholder.org/users/${id}", { method: "DELETE" });
  }; */
  const deleteUser = (id) => {
    axios.delete("https://jsonplaceholder.org/users/${id}");
  };

  const childProps = {
    users,
    user,
    createUser,
    deleteUser,
  };
  //   const updateUserPut = (newInfo, id) => {
  //     fetch("https://jsonplaceholder.org/users/${id}"),
  //       { method: "PUT", body: JSON.stringify(newInfo) }; // {...oldUser, x:1, y:2}
  //   };
  const updateUserPut = (newInfo, id) => {
    axios.put("https://jsonplaceholder.org/users/${id}", newInfo);
    // {...oldUser, x:1, y:2}
  };
  const updateUserPatch = (newInfo, id) => {
    axios.patch("https://jsonplaceholder.org/users/${id}", newInfo);
  };
  //   const updateUserPatch = (newInfo, id) => {
  //     fetch("https://jsonplaceholder.org/users/${id}"),
  //       { method: "PATCH", body: JSON.stringify(newInfo) }; // {x:1, y:2}
  //   };

  return <FetchingData {...childProps} />;
};

export default FetchingDataContainer;
