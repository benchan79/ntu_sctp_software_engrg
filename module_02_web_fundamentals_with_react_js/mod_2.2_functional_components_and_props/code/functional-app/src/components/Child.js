import Pet from "./Pet";
import Card from "./Card";
function Child({ firstName, petType }) {
  return (
    <Card>
      <h2>Child name: {firstName}</h2>
      <Pet type={petType} />
    </Card>
  );
}

export default Child;
