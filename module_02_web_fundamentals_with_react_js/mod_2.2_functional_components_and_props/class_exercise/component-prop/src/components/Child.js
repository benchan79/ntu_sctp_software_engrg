// For the child component to read the data from the
// parent component the props object is used.
// There are 3 approaches to do this
// 1. The component takes in the props object,
// call the props.<attribute>
// 2. The component takes in the props object,
// create a variable that destructures the object
// 3. The component takes in a destructured object
// is extract the props directly from the function's
// parameter list

// Method 3 can be used as a shortcut to add default values

// Method 1
// function Child(props) {
// 	return(
// 		<>
// 			<h2>This is {props.firstName}</h2>
// 		</>
// 	)
// }

// Method 2
// function Child(props) {
// 	const {firstName = "UNKNOWN"} = props;
// 	return(
// 		<>
// 			<h2>This is {firstName}</h2>
// 		</>
// 	)
// }

import Pet from "./Pet";
import Card from "./Card";

// Method 3
function Child({ firstName = "UNKNOWN", petType = "UNKNOWN" }) {
  return (
    <>
      <Card>
        <h4>This is {firstName}</h4>
        <Pet type={petType} />
      </Card>
    </>
  );
}

export default Child;
