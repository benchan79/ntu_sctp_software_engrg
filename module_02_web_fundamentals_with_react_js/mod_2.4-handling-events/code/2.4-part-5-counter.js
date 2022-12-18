import { useState } from 'react';
import Button from './Button';
import Input from './Input';

function Counter() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState('Banana');

  const price = 2.99;

  const handlerPlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };
  const handlerMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        setDiscount(0);
      }
      if (count < 0) return 0;
      return count;
    });
  };

  const handlerChange = (value) => {
    setName(value);
  };

  return (
    <>
      <h3>{name}</h3>
      <Button label='-' onClick={handlerMinus} />
      <span>{count}</span>
      <Button label='+' onClick={handlerPlus} />
      <h2>{`$ ${price}`} each</h2>
      <h3>{`Discount: ${discount}%`}</h3>
      <Input value={name} label='Product Name' onChange={handlerChange} />
    </>
  );
}
export default Counter;
