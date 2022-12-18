import { useState } from 'react';

function Counter() {
	// const state = useState(0)
  // console.log(state)

	const [count, setCount] = useState(0);

	const handlerPlus = () => {
		setCount(prevCount => {
			return (prevCount + 1)
		});
	};

	const handlerMinus = () => {
		setCount(prevCount => {
			return (prevCount - 1)
		});
	}
	

  return (
		<>
			<button onClick={handlerMinus}>-</button>
			<span>{count}</span>
			<button onClick={handlerPlus}>+</button>
		</>
	);
}

export default Counter;
