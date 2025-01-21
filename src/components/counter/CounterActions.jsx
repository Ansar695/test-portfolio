"use client";

import { useContext } from "react";
import { CounterContext } from "./CounterProvider";

const CounterActions = () => {
  const { increment, decrement } = useContext(CounterContext);

  return (
    <div className="flex gap-2 text-4xl justify-center">
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default CounterActions;
