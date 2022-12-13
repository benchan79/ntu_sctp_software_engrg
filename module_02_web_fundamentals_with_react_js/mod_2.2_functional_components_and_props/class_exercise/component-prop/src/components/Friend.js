import Pet from "./Pet";
import Child from "./Child";
import Card from "./Card";

function Friend(props) {
  const { fName = "Anonymous", petType = "no pet" } = props;
  return (
    <>
      <h4> This is {fName}</h4>
      <p> I am not in a Card</p>
      <p> I like rabbits but...</p>
      <Pet type={petType} />
      Can I put a card in a card?
      <Card>
        <Card>
          <Card>
            <Card>
              <Card>
                <Child firstName="Sally" petType="hamster" />
              </Card>
            </Card>
          </Card>
        </Card>
      </Card>
    </>
  );
}

export default Friend;
