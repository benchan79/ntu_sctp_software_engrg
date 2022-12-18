import { useState } from 'react';
import Button from "./Button"
import Input from "./Input"

export function Counter() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [price, setPrice] = useState('');
    
  const handlerPlus = () => {
    setCount((prevCount) => {
      setDiscount(() => (prevCount + 1) >= 5 ? 20 : 0);
      return prevCount + 1;
    });
  };

  const handlerMinus = () => {
    setCount((prevCount) => {
      setDiscount(() => (prevCount - 1) >= 5 ? 20 : 0);
      return (prevCount > 0 ? prevCount - 1 : 0);
    });
  };

  const [name, setName] = useState("Orange");

  const handlerInput = ({target}) => {
    if (target.value.length > 10) {
      alert("please enter less than 10 chars")
    } else {
    console.log(target.value)
    setName(target.value)
    }
  }

  const handlerPriceInput = ({ target }) => {
    let value = target.value;
    if (isNaN(value)) {
      alert("Pease enter a valid number.")
    } else if (value < 0) {
      alert("Please enter a positive value.");
    } else if (target.value.length > 4) {
      alert("please enter less than 2 decimal places")
    } else if (value > 9.99) {
      alert("Maximum price is $9.99");
    } else {
      setPrice(value);
    }
  };

  return (
    <>
      <h2>{name}</h2>
      <Button label="-" onClick={handlerMinus} />
      <span>{count}</span>
      <Button label="+" onClick={handlerPlus} />
      <h2>${price} each </h2>
      <h3>{discount}%</h3>

      <Input 
        label="Product"
        value={name} 
        onChange={handlerInput}
        type="text"
      />

      <Input 
        label="Price"
        value={price} 
        onChange={handlerPriceInput}
        type="number"
      />

    </>
  );
};

