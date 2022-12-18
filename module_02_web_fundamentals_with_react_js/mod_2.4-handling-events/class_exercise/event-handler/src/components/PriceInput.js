function PriceInput({ value, label, onChange }) {

  // const handlerChange = ({target}) => {
  //   onChange_prop(target.value);
  // };

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input 
        id={label} 
        value={value}
        onChange={onChange} 
        type="number"
        />
    </div>
  );
}

export default PriceInput;