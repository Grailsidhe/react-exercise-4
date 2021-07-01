import React from "react";
import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <Counter step={2} />
      <Counter step={5} initialValue={50} />
    </div>
  );
}