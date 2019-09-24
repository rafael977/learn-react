import React, { useState, useEffect } from "react";

const UserList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      const res = await window.fetch(
        `https://jsonplaceholder.typicode.com/${resource}`,
        {
          method: "GET"
        }
      );

      setResources(await res.json());
    })(resource);
  }, [resource]);

  return (
    <ul>
      {resources.map(rs => (
        <li key={rs.id}>{rs.title}</li>
      ))}
    </ul>
  );
};

export default UserList;
