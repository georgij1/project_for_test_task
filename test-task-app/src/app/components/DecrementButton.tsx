import React from "react";
import { useCounter } from "./CounterProvider";
import { ButtonText } from "./ButtonText";

export const DecrementButton: React.FC = () => {
  const { decrement } = useCounter();

  return <ButtonText onClick={decrement}>decrement</ButtonText>;
};