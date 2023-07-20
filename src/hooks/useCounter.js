import { useState } from "react";

/**
 * useCounter
 *
 * @param {number} initValue
 * @returns {[number, { increment: () => void, decrement: () => void }]}
 * */
export default function useCounter(initValue = 0) {
  const [counter, setCounter] = useState(initValue);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return [counter, { increment, decrement }];
}
