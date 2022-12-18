import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handlerPlus = () => {
    setCount(count + 1);
  };
  const handlerMinus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={handlerMinus}>-</button>
      <span>{count}</span>
      <button onClick={handlerPlus}>+</button>
    </>
  );
}
export default Counter;
