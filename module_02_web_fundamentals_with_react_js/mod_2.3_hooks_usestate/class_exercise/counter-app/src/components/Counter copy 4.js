import { useState } from "react";

const initialValues = {    
	name: "Fruits",
	count: 0,
	fruitUnitPrice: 2.99,
	vegUnitPrice: 0.50,
	totalPrice: 0.00,
	discount: 0,
}

function Discount() {

  const [product, setProduct] = useState(initialValues);

	const handlerPdtChg = () => {
		if (product.count > 0) {
			setProduct(initialValues)
			alert("Please Reset before changing product next time. Thank you.")
		} else {
			setProduct((prevState) => {
				const newPdt = prevState.name === "Fruits" ? "Vegetables" : "Fruits"
				return {
					...prevState,
					name: newPdt,
				}
			})}
	};

  const handlerPlus = () => {
    setProduct((prevState) => {
      const newCount = prevState.count + 1;
			const fruitDisc = newCount >= 5 ? 20 : 0;
      const vegDisc = newCount >= 5 ? 10 : 0;
			const discount = prevState.name === "Fruits" ? fruitDisc : vegDisc
			const newUnitPrice = prevState.name === "Fruits" ? product.fruitUnitPrice : product.vegUnitPrice
      const newPrice = prevState.totalPrice + newUnitPrice // Method 1
			return {
        ...prevState,
        count: newCount,
				totalPrice: newPrice,
        discount: discount,
      };
    });
  };

  const handlerMinus = () => {
    setProduct((prevState) => {
      const newCount = (prevState.count > 0) ? (prevState.count - 1) : 0 ;  
			const fruitDisc = newCount >= 5 ? 20 : 0;
      const vegDisc = newCount >= 5 ? 10 : 0;
			const discount = prevState.name === "Fruits" ? fruitDisc : vegDisc
			const newUnitPrice = prevState.name === "Fruits" ? product.fruitUnitPrice : product.vegUnitPrice
			const newPrice = newUnitPrice * newCount // Method 2
      return {
        ...prevState,
        count: newCount,
				totalPrice: newPrice,
        discount: discount,
      };
    });
  };

	const reset = () => {
		setProduct(initialValues)
	}

  return (
    <>
      <button onClick={handlerPdtChg}> Change Product </button> 
			<span> {product.name} </span> 
			<br />
      <button onClick={handlerMinus}> - </button>
      <span>{product.count}</span>
      <button onClick={handlerPlus}> + </button>
      <h3> Before Discount: ${product.totalPrice.toFixed(2)} </h3>
      <h3> Discount: {product.discount}% </h3>
			<h3> After Discount: ${ (product.count > 4) ? (product.totalPrice * (100 - product.discount) / 100).toFixed(2) : product.totalPrice.toFixed(2)} </h3>
			<button onClick={reset}>Reset</button>
    </>
  );
}
export default Discount;