// The basic structure of a functional component
// 1. function
// 2. return of the JSX

// Props are used by React for the parent component to
// cascade information to the child components.
// To use props, simply add an attribute that
// corresponds to the data.

// export default allows the function/component
// to be used by other files.

import Child from "./Child";
import AnotherChild from "./AnotherChild";
import Friend from "./Friend";
import AnotherFriend from "./AnotherFriend";

function Parent() {
  return (
    <>
      <h1>This is a Parent component</h1>
      {/* <h2>The children components will be placed here</h2> */}
      <Child firstName="Tom" petType="a cat" />
      <Friend />
      <Child firstName="Charlie" petType="a dog" />
      <Child firstName="Daisy" petType="a parrot" />
      <Child firstName="Bob" petType="a turtle" />
      <Child />
      <AnotherChild fName="Ethan" />
      <AnotherFriend fName="Hank" petType="an iguana" />
    </>
  );
}

export default Parent;
