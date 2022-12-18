function Input({ value, label, onChange }) {

  const handlerChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={handlerChange} />
    </div>
  );
}
export default Input;
