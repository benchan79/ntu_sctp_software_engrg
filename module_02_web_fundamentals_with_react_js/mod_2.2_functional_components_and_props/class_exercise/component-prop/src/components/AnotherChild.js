import Card from "./Card.js";

function AnotherChild(props) {
  console.log(props);
  return (
    <>
      <h4>This is {props.fName}</h4>
      <p>I am in AnotherChild but outside the Card.</p>
      <Card>
        <h3>This is AnotherChild component that uses Card</h3>
        <p>Some text here</p>
        <p>Another set of test</p>
        <p>The last set of text</p>
      </Card>
    </>
  );
}

export default AnotherChild;
