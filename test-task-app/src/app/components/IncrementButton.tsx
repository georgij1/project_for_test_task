import React from "react";
import { useCounter } from "./CounterProvider";
import { ButtonText } from "./ButtonText";

export const IncrementButton: React.FC = () => {
  const { increment } = useCounter();

  return <ButtonText onClick={increment}>increment</ButtonText>;
};