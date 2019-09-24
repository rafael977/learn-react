import React, { useState } from "react";
import ResourceList from "./ResourceList";

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div>
      <button onClick={() => setResource("posts")}>Posts</button>
      <button onClick={() => setResource("todos")}>Todos</button>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
