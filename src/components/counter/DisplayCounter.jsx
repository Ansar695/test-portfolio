"use client";

import { useContext } from "react";
import { CounterContext } from "./CounterProvider";

const DisplayCounter = () => {
  const { count } = useContext(CounterContext);

  return (
    <div className="text-center text-2xl">
      <h1>Count: {count}</h1>
    </div>
  );
};

export default DisplayCounter;
