import { useState } from 'react';

function Counter() {
	// const state = useState(0)
  // console.log(state)

	// const [count, setCount] = useState(0);

	const [products, setProduct] = useState({
		name: 'Fruits',
		count: 0,
	});

	function pdtCtr(pdt) {
		return {
			...pdt,
			count: pdt.count + 1
		}
	}

	const handlerPlus = () => {
		setProduct(pdtCtr(products));
	};


	// const handlerPlus = () => {
	// 	setProduct(prevProduct => {
	// 		return {
	// 			...prevProduct,
	// 			count: prevProduct.count + 1
	// 		}
	// 	});
	// };

	const handlerMinus = () => {
		setProduct(prevProduct => {
			return {
				...prevProduct,
				count: prevProduct.count - 1
			};
		});
	}
	

  return (
		<>
			<h2>{products.name}</h2>
			<button onClick={handlerMinus}>-</button>
			<span>{products.count}</span>
			<button onClick={handlerPlus}>+</button>
		</>
	);
}

export default Counter;
