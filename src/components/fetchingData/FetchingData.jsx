import React from "react";

const FetchingData = ({ users, createUser, deleteUser }) => {
  return (
    <div>
      {users.map((user) => {
        return <h2 key={user.id}>{user.firstname}</h2>;
      })}

      <button onClick={() => createUser({ name: "juan" })}>
        Crear usuario
      </button>

      <button onClick={() => deleteUser(4)}>Borrar usuario</button>
    </div>
  );
};

export default FetchingData;
