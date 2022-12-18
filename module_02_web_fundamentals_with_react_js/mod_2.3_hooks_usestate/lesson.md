# 2.3 Your First Hook `useState`

## Preparation

Create a new React app with src/components folder:
```
npx create-react-app my-app
cd my-app
mkdir components
```
Clean up the project folder as described in previous chapter.

## Part 1: Create the Base Code

Create a simple `Counter` component in the `components` folder:
```js
// Counter.js

function Counter() {
  return (
    <>
      <button>-</button>
      <span>0</span>
      <button>+</button>
    </>
  );
}
export default Counter;
```
Edit App.js
```js
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
    </div>
  );
}

export default App;
```

Update the style sheets in `App.css`
```css
.App {
  font-family: sans-serif;
  text-align: center;
}

button {
  font-size: 2rem;
  width: 4rem;
  margin: 1rem;
  padding: 0.5rem;
}

span {
  font-size: 1.5rem;
}
```
You now have a static React page that doesn't really do anything! Let's add some functionality to the buttons.

## Part 2: Add UI Interactivity

We will now add the `useState` hook into the `Counter` component to enable state management. 

```js
// Counter.js
import { useState } from 'react';

function Counter() {
  const state = useState(0);
  console.log(state)
  return (
    ...
  );
}
```
Before we use the state variable returned by `useState`, let's take a peek at the console.log to see what is useState returns, i.e. an array of 2 elements:

1. The state value
2. An update function which allows us to change the state value 

**IMPORTANT**: The state value must be changed via the update function --it cannot be changed directly!

Re-write the useState expression to use ES6 array destructuring to assign the state variable and update function respectively:

```js
// Counter.js
function Counter() {
  const [count, setCount] = useState(0);
  ...
}
```
Let's put the `setCount` function to use, by creating a '+' button handler `handlerPlus` and inserting `setCount` into the function:

```js
function Counter() {
  const [count, setCount] = useState(0);
  
  const handlerPlus = () => {
    setCount(1);
    console.log(count);
  }
  return (
    ...
      <button onClick={handlerPlus}>+</button>
    ...
  );
}
```
> Note: The `handlerPlus` function is written in ES6 arrow notation, which is equivalent to `function handlerPlus() {...}`. 

The '+' button will now update the state with a new value, which you can see on the console.log.

To complete the '-' and '+' handlers, `setCount` has to compute a new state using the previous state (prevCount), by passing a function to `setState`. We complete the component by adding the '-' button handler `handlerMinus` and assigning `{count}` in between the `<span>` element to display the counter:

```js
function Counter() {
  const [count, setCount] = useState(0);

  const handlerPlus = () => {
    setCount(prevCount => {
      return (prevCount + 1)
    });
  };
  const handlerMinus = () => {
    setCount(prevCount => {
      return (prevCount - 1)
    });
  };

  return (
    <>
      <button onClick={handlerMinus}>-</button>
      <span>{count}</span>
      <button onClick={handlerPlus}>+</button>
    </>
  );
}
```
You now have a fully functional counter! 

## Part 3: Objects as State Variables

State variables can be a primitive data type (e.g. numbers, strings) or complex data types, e.g. objects and arrays. Let's look at how to use objects as state variable. Change the `Counter` state variable and update function to an object `product` and `setProduct` respectively, and adapt the '+' handler:

```js
function Counter() {
  const [product, setProduct] = useState({
    name: 'Fruits',
    count: 0,
  });

  const handlerPlus = () => {
    setProduct(prevProduct => {
      return { 
        count: prevProduct.count + 1 
      }
    })
  }
  
  // Keep handlerMinus unchanged for the time being.

  return (
    <>
      <h2>{product.name}</h2>
      <button onClick={handlerMinus}>-</button>
      <span>{product.count}</span>
      <button onClick={handlerPlus}>+</button>
    </>
  );
}
```
Press the '+' button a few times to observe what is happening. 

Explain your observation and suggest a solution. 

> Do not read ahead for the solution yet!

The `setProduct` update function will **overwrite** the state variable `product`. Thus, when setting an object state variable, you need to specify all the fields in the object, not only the field you are updating. 

```js
// Counter.js

const handlerPlus = () => {
    setProduct(prevProduct => {
      return { 
        name: prevProduct.name,
        count: prevProduct.count + 1 
      }
    })
  }
```
An alternative to assigning each field in the return object, you can use the ES6 spread operator {...} to copy the whole object in a single line of code, which is useful when you have a lot of fields:

```js
// Counter.js

const handlerPlus = () => {
    setProduct(prevProduct => {
      return { 
        ...prevProduct,
        count: prevProduct.count + 1 
      }
    })
  }
```
Since there is a performance overhead when using object state variables, consider using multiple state variables with primitive data types as an alternative, if there are only a few states to manage:

```js
  const [name, setName] = useState('Fruits');
  const [count, setCount] = useState(0);
```
## Part 4: Beware of Hooks!

Create a new component `Discount.js` [code](./code/2.3-part-4-begin.js) where the app shall display a discount value when the counter exceeds a pre-determined value. However, the app will crash when the counter value is finally reached. 

Why does the app crash? Check the warning messages generated during compile time for a clue.

### Hooks at the Top
- Hooks only work from functional components
- Hooks must be called at the top level of the React function
- Do not call hooks from loops, conditions, nested function or blocks

Now that you understand the above rules, propose a solution to fix the code above. There are several ways to solve this, can you find at least 2 different solutions?

Once you have made an attempted to a solution, here is a possible [solution code](./code/2.3-part-4-final.js).

## Part 5: Compare State Handling between Functional and Class Components

Compare the following code that implement state handling, but using different component implementation:
- Functional component [code](./code/2.3-part-2.js)
- Class Component [code](./code/2.3-part-5-class.js)

| Implementation | Functional | Class 
|---|---|---|
| imports from 'react' | `{ useState }` | `import { Component }` |
| state provider function | `useState()` | `setState()` |
| state variable access (set) | `const [variable,...] = useState()` | `this.variable` |
| state variable update | `const [..., setVariable]` | `this.setState(state.variable)` |
| state variable in JSX | `<p>{variable}</p>` | `<p>{this.variable}</p>` |
| component local functions | `const handlerFunction()` | `this.handlerFunction = this.handlerFunction.bind(this)`<br/>`handlerFunction = () => {...}` |
