function Input({ value, label, onChange, type }) {

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
        type={type}
      />
    </div>
  );
}

export default Input;