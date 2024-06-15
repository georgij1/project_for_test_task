import React from "react";
import { Button } from "./Button";
import { Text } from "./Text";

interface ButtonTextProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const ButtonText: React.FC<ButtonTextProps> = ({ onClick, children }) => {
  return (
    <>
      <Text>{children}</Text>
      <Button onClick={onClick}>{children}</Button>
    </>
  );
};