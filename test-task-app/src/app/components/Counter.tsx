"use client";
import { FC, useState } from "react";
import { CounterProvider } from "./CounterProvider";
import { IncrementButton } from "./IncrementButton";
import { DecrementButton } from "./DecrementButton";

export const Counter: FC = () => {
  const [index, setIndex] = useState(0);

  const increment = () => setIndex(index + 1);
  const decrement = () => setIndex(index - 1);

  const style = {
    "display": "flex",
    "flex-direction": "column",
    "gap": "20px"
  }

  return (
    <CounterProvider value={{ index, increment, decrement }}>
      <div style={style}>
        {index}
        <IncrementButton />
        <DecrementButton />
      </div>
    </CounterProvider>
  );
};