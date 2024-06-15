"use client";
import { FC, createContext, useContext } from "react";

interface CounterContextType {
    index: number;
    increment: () => void;
    decrement: () => void;
}

interface CounterProviderProps {
    value: CounterContextType;
    children: React.ReactNode;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider: FC<CounterProviderProps> = ({
    children,
    value,
}) => {
    return (
        <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
    );
};

export const useCounter = () => {
    const context = useContext(CounterContext);
    
    if (!context) {
      throw new Error("useCounter must be used within a CounterProvider");
    }
    
    return context;
};