import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFetch } from "../../utils/hooks/useFetch";

const Users = () => {
  const {
    data: users,
    error,
    loading,
  } = useFetch("https://jsonplaceholder.org/users");
  console.log(users);
  return <div>Users</div>;
};

export default Users;
