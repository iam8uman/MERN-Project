"use-client";

// make a counter in React.js
import { useState } from "react";

const counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      count is {count}
    </div>
  );
};

export default counter;
