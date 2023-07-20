import { number } from "prop-types";
import useCounter from "./hooks/useCounter.js";

export default function Counter({ initValue = 0 }) {
  const [counter, { increment, decrement }] = useCounter(initValue);
  return (
    <>
      <h4>{counter}</h4>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  );
}

Counter.propTypes = {
  initValue: number,
};
