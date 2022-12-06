import Child from "./Child";

function Parent() {
  return (
    <>
      <h1>Parent here!</h1>
      <Child firstName="Tom" petType="cat" />
      <Child firstName="Charlie" petType="dog" />
      <Child firstName="Daisy" petType="hamster" />
    </>
  );
}

export default Parent;
