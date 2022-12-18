# 2.4 Handling Events

## Preparation

Create a new React app with src/components folder:
```
npx create-react-app my-app
cd my-app
mkdir components
```
Clean up the project folder as described in previous chapter.

### Event Handlers in JSX

Handling events in React is very similar to handling events on DOM elements. There are syntax difference between JSX and HTML when handling events:
- JSX events are named using camelCase, not lowercase
- JSX handlers are passed as functions, not as strings

*In HTML*
```html
<button onclick="handlerPlus()"> + </button>

```
*In JSX*
  
```js
<button onClick={handlerPlus}> + </button>

```

## Part 1: Asynchronous React Rendering

Create a component called `Counter.js` in the `components` directory and include it in your `App.js` file. Copy and paste the following [starter code](./code/2.4-part-2-begin.js) in `Counter.js`. For optional styling, copy `App.css` from [style sheet](./code/App.css) and replace it in your project root folder. 

Compile and start the React app.

```
npm start
```

Press the '+' button a few times and compare the app's behaviour with the code. 

Is the app behaviour expected? 

> Pause here and explain the behaviour before reading further

React will refresh a component on the Virtual DOM when there is a change component's state variable, e.g. `count`. The function `setCount` will update `count` whenever the event handlers, `handlerPlus` and `handlerMinus` are called via the `onClick` handler. 

In the code snippet below, you would expect the following to happen:
- `setCount` will immediately set the `count` state during the function call 
- The following `if` statement would have used the updated `count` state for comparison.

```js
...
const [count, setCount] = useState(0);
...
const handlerPlus = () => {
  setCount(count + 1);
  if (count >= 5) {
    setDiscount(20);
...
```
However, as you might have observed earlier, this is **not the case**!

What is really happening is that React will render its components *asynchronously*, i.e. not in the same order as the code is executed. There could be a delay between calling the `setCount` function and the `count` state variable being updated, resulting in a false value being used when the `if` statement is being executed in the handler.

The solution to this problem is to pass a function to the `setCount` as follows:

```js
const handlerPlus = () => {
  function myFunc(prevCount) {
    let count = prevCount + 1;
    if (count >= 5) {
      setDiscount(20);
    }
    return count;
  }
  setCount(myFunc);
};
```
## Part 2: Higher Order Functions

In the previous section, `setCount` has become a **higher-order function**, as it is now elevated to accept another function `myFunc` as its argument, instead of a number. 

The function can be re-written using ES6 arrow arrow notation as follows:

```js
const handlerPlus = () => {
  setCount((prevCount) => {
    let count = prevCount + 1;
    if (count >= 5) {
      setDiscount(20);
    }
    return count;
  });
};
```
Higher-order functions treat functions just like data, e.g. string, numbers, booleans, objects, arrays. In Javascript, functions can be passed as arguments
and returned as functions.

You will encounter more examples of higher-order functions when using Javascript's popular Array methods, e.g. `map`, `filter` and `reduce`.

## Part 3: Passing Event Handlers as Props

Let's refactor the `<button>` element and wrap its functionality and styling into its own component, called `<Button>` (with a capital 'B'). This new component will take some props from its parent, the first one being a *label* to identify the button on the page. Also, `Button` will come with its own customised CSS styling, courtesy of its corresponding `.module.css`

Create a new `Button.js` component in the `components` folder:

```js
// Button.js
import styles from './Button.module.css'

function Button({ label }) {
  return (
    <button className={styles.button}>
      {label}
    </button>
  )
}
export default Button;

```
Copy the `Button.module.css` file from the [code](./code/Button.module.css) folder.

Modify the parent `Counter` component to replace the HTML `<button>` elements with the new `Button` component:

```js
// Counter.js
...
return (
  <>
    <h2>{name}</h2>
    <Button label="-" />
    ...
    <Button label="+" />
...

```
The newly minted `Button` components should be visible now, but are more interactive! In order re-enable the buttons, we need to pass the handler functions to the children `Buttons` as props, let's call it `onClick`:

```js
    <Button label="-" onClick={handlerMinus} />
    ...
    <Button label="+" onClick={handlerPlus} />
```
Modify `Button` to accept the new prop:

```js
// Button.js
...
function Button({ label, onClick }) {
  return (
    <button className={styles.button} onClick={onClick} >
...

```
> Prop names are user-customisable, just make sure the prop names are identical in both parent and child components
 
The final code for `Button.js` and `Counter.js` can be found [here](./code/2.4-part-4-button.js) and [here](./code/2.4-part-4-counter.js).

## Part 4: Using Events to Capture Input Fields

The `onChange` event handler is triggered when a value of an element, e.g. `<input>` changes. 

Create a new `Input` component that accepts an input value `config` and a `label` as props:

```js
// Input.js

function Input({ config, label }) {
  return (
    <div>
      <label>{label}</label>
      <input value={config} />
    </div>
  );
}
export default Input;
```
The input box appears, but you can't type anything into it because the handlers are not connected:
- Change the `<input value=...>` attribute to the controlled state `value`
- Add `handlerChange` to pass on keystroke inputs to the onChange function prop

```js
// Input.js

function Input({ config, label, onChange }) {
  const handlerChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={handlerChange} />
    </div>
...
```
The input box will now update, but the name on the top of the buttons still remains the same. 

The parent `Counter` component must pass on its own handler to set the name of the product, in sync with the user type into the input field.

- Convert `name` into a controlled state variable with `setName` as update function
- Add `handlerChange` to set the value of `name` using `setName`
- Pass `handlerChange` as a prop to the child `Input` component

```js
// Counter.js
...
const [name, setName] = useState("Banana");
...
const handlerChange = (value) => {
  setName(value);
};
...
return (
  ...
  <Input value={name} label="Product Name" onChange={handlerChange} />
...
```
Update `Input` to accept `onChange` prop to accept `handlerChange` from its parent.

```js
// Input.js
...
function Input({ config, label, onChange }) {
...
  const handlerChange = (event) => {
    onChange(event.target.value);  // Execute onChange handler from parent
  };

```
Now, the product name will update when the user keys in any text in the input box.
