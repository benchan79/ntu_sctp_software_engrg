import { useState } from "react";

const initialValues = {    
	name: "Fruits",
	count: 0,
	price: 2.99,
	discount: 0,
}

function Discount() {

  const [product, setProduct] = useState(initialValues);

  const handlerPlus = () => {
    setProduct((prevState) => {
			const newCount = prevState.count + 1;
			const discount = newCount >= 5 ? 20 : 0;
      return {
				...prevState,
				count: newCount,
				discount: discount,
    	}
		});
  };

  const handlerMinus = () => {
    setProduct((prevState) => {
			const newCount = prevState.count - 1;
			const discount = newCount >= 5 ? 20 : 0;
      return {
				...prevState,
      count: newCount,
			discount: discount,
    }});
  };

	const reset = () => {
		setProduct(initialValues)
	}

  return (
    <>
      <h2>{product.name}</h2>
      <button onClick={handlerMinus}>-</button>
      <span>{product.count}</span>
      <button onClick={handlerPlus}>+</button>
      <h2>{`$ ${product.price}`}</h2>
      <h3>{`Discount: ${product.discount}%`}</h3>

			<button onClick={reset}>Reset</button>
    </>
  );
}
export default Discount;