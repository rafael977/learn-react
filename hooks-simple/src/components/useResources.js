import { useState, useEffect } from "react";

export default resource => {
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

  return resources;
};
