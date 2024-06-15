import React from "react";
import { Counter } from "./Counter";

export const CounterView: React.FC = () => {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter />
    </div>
  );
};