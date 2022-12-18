import { useState } from "react";

function Discount() {
  const [product, setProduct] = useState({
    name: "Fruits",
    count: 0,
    price: 2.99
  });

  if (product.count >= 5) {
    const [discount, setDiscount] = useState(20);
  }

  const handlerPlus = () => {
    setProduct({
      ...product,
      count: product.count + 1
    });
  };
  const handlerMinus = () => {
    setProduct({
      ...product,
      count: product.count - 1
    });
  };

  return (
    <>
      <h2>{product.name}</h2>
      <button onClick={handlerMinus}>-</button>
      <span>{product.count}</span>
      <button onClick={handlerPlus}>+</button>
      <h2>{`$ ${product.price}`}</h2>
      <h3>{`Discount: ${0}%`}</h3>
    </>
  );
}
export default Discount;
