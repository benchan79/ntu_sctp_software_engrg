function Card({ children }) {
  return (
    <>
      <div className="card">
        <h3>Card Details</h3>
        <hr />
        {children}
      </div>
    </>
  );
}

export default Card;
