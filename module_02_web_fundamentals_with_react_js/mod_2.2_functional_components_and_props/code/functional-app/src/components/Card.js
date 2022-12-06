function Card({ children }) {
  return (
    <div className="card">
      <h3>Details</h3>
      <hr />
      {children}
    </div>
  );
}
export default Card;
