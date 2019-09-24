import React from "react";
import useResources from "./useResources";

const UserList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul>
      {resources.map(rs => (
        <li key={rs.id}>{rs.title}</li>
      ))}
    </ul>
  );
};

export default UserList;
