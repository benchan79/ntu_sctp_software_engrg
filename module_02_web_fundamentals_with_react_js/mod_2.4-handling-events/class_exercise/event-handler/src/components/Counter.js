import { useState, useRef } from 'react';
import Button from "./Button"
import Input from "./Input"
import PriceInput from "./PriceInput"

export function Counter() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  

  // const name = "Banana";
  // const price = 2.99;

  // const handlerPlus = () => {
  //   setCount(count + 1);
  //   if (count >= 5) {
  //     setDiscount(20);
  //   };

  // const handlerPlus = () => {
  //   function myFunc(prevCount) {
  //     let count = prevCount + 1;
  //     if (count >= 5) {
  //       setDiscount(20);
  //     }
  //     return count;
  //   };
  //   setCount(myFunc);
  // };

  // const handlerPlus = () => {
  //   setCount((prevCount) => {
  //       if ((prevCount + 1) >= 5) {
  //         setDiscount(20);
  //       }
  //       return prevCount + 1;
  //   });
  // };
  
  const handlerPlus = () => {
    setCount((prevCount) => {
      setDiscount(() => (prevCount + 1) >= 5 ? 20 : 0);
      return prevCount + 1;
    });
  };

  // const handlerMinus = () => {
  //   setCount((prevCount) => prevCount - 1);
  //   if (count < 5) {
  //     setDiscount(0);
  //   }
  // };

  // const handlerMinus = () => {
  //   setCount((prevCount) => {
  //       if ((prevCount - 1) < 5) {
  //         setDiscount(0);
  //       }
  //       return (prevCount > 0 ? prevCount - 1 : 0);
  //   });
  // };

  const handlerMinus = () => {
    setCount((prevCount) => {
      setDiscount(() => (prevCount - 1) >= 5 ? 20 : 0);
      return (prevCount > 0 ? prevCount - 1 : 0);
    });
  };

	// const reset = () => {
	// 	setCount(0);
  //   setPrice(0);
	// }

  const [name1, setName1] = useState("Orange");
  const [name2, setName2] = useState("Apple");

  const handlerInput1 = ({target}) => {
    if (target.value.length > 10) {
      alert("please enter less than 10 chars")
    } else {
    console.log(target.value)
    setName1(target.value)
    }
  }

  // const handlerChange_ = (newName) => {
  //   setName2(newName);
  // };

  const handlerInput2 = ({target}) => {
    if (target.value.length > 10) {
      alert("please enter less than 10 chars")
    } else {
    console.log(target.value)
    setName2(target.value)
    }
  }

  const [price, setPrice] = useState('');

  const handlerPriceInput = ({ target }) => {
    let value = target.value;
    if (value < 0) {
      alert("Please enter a positive value.");
    } else if (value > 12.99) {
      alert("Maximum price is $12.99");
    } else {
      setPrice(value);
    }
  };

  const textAreaRef = useRef(null);
  const [comments, setComments] = useState("Dafault comment")

  const submitComments = () => {
    console.log(textAreaRef.current.value);
    setComments(textAreaRef.current.value);
  }

  return (
    <>
      <h2>Counter.js: {name1}</h2>
      <h2>Input.js: {name2}</h2>
      <Button label="-" onClick={handlerMinus} />
      <span>{count}</span>
      <Button label="+" onClick={handlerPlus} />
      <h2>${price} each </h2>
      <h3>{discount}%</h3>
      {/* <Button label="Reset" onClick={reset} /> */}
      <p/>
      <label htmlFor="product">Counter.js: Product</label>
      <input id="product" onChange={handlerInput1} value={name1} />

      {/* <Input 
        label_prop="External: Product"
        value_prop={name2} 
        onChange_prop={handlerChange_} 
      /> */}

      <Input 
        label="Input.js: Product"
        value={name2} 
        onChange={handlerInput2}
        type="text"
      />

      <Input 
        label="Price"
        value={price} 
        onChange={handlerPriceInput}
        type="number"
      />

      <PriceInput 
        label="Price"
        value={price} 
        onChange={handlerPriceInput}
      />

      <p/>
      <h2>Comments</h2>
      <p>{comments}</p>
      <textarea id="comments" ref={textAreaRef}></textarea>
      <button type = "button" onClick ={submitComments}>Submit</button>
    </>
  );
};

