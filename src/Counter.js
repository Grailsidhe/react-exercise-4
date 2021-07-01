import React, { useState } from "react";

const Counter = ({ step = 1 }) => {
  const [count, setCount] = useState(0);
  const incrementCounter = () => setCount(count + step);
  const decrementCounter = () => setCount(count - step);

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCounter}> + {step}</button>
      <button onClick={decrementCounter}> - {step}</button>
    </div>
  );
};

export default Counter;