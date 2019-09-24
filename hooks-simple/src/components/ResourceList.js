import React, { useState, useEffect } from "react";

const UserList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResources = async resource => {
    const res = await window.fetch(
      `https://jsonplaceholder.typicode.com/${resource}`,
      {
        method: "GET"
      }
    );

    setResources(await res.json());
  };

  useEffect(() => {
    fetchResources(resource);
  }, [resource]);

  return <div>{resources.length}</div>;
};

export default UserList;
