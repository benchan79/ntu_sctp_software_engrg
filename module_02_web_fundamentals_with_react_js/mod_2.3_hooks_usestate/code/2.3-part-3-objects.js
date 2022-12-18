import { useState } from "react";

function Counter() {
  const [product, setProduct] = useState({
    name: "Fruits",
    count: 0
  });

  const handlerPlus = () => {
    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        count: prevProduct.count + 1
      };
    });
  };
  const handlerMinus = () => {
    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        count: prevProduct.count - 1
      };
    });
  };

  return (
    <>
      <h2>{product.name}</h2>
      <button onClick={handlerMinus}>-</button>
      <span>{product.count}</span>
      <button onClick={handlerPlus}>+</button>
    </>
  );
}
export default Counter;