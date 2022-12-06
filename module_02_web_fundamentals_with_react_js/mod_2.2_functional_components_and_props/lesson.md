# 2.2 Functional Components and Props

## Preparation

Create a new React app with src/components folder:
```
npx create-react-app my-app
cd my-app
mkdir components
```
Clean up the project folder as described in previous chapter.

## Part 1: Create a Parent/Child Component

The starter code in `App.js` has a ready-made `App` component, which will be the 'root' component where all your other React components will be based from. Additional components shall be added as children to the App component.

Remove the JSX code in the `App` component and replace it with a `Parent` component:

```js
// App.js

import './App.css';
import Parent from './components/Parent';

function App() {
  return (
    <Parent/>
  );
}

export default App;
```
Create a new Parent component in the components folder:
```js
// Parent.js

function Parent() { 
  return(
    <>
      <h1>This is a Parent component</h1>
      <h2>The children components will be placed here</h2>
    </>
  );
}

export default Parent;
```

The export default allows the application to use the Parent class as a module to be used by the application. Test and run the application:

```
 npm start
```

Create a Child component in the `components` folder:
```js
// Child.js

function Child() {
  return <div>This is a child component</div>
}

export default Child;
```

Import the newly created Child component into the Parent component that you created earlier.
```js
// Parent.js
import Child from './Parent'

function Parent(){
  return(
    <>
      <h1>I am a parent!</h1>
      <Child />
    </>
  );
}

```
Check your browser to see any changes as the app 'hotloads' after every source code save. If the server crashes for any reason, jusr restart it with `npm start`.

## Part 2: Passing Props into a Component

Props (properties) is the way React communicates between parent and child components. It allows data to be passed from parent to child. To use props, add an attribute corresponding to data that is to be passed.

In Parent.js, add a few more Child components and add a *firstName* attribute to each Child, with a prop value to be passed to each Child component:

```js
// Parent.js
...
  <Child firstName="Tom" />
  <Child firstName="Charlie" />
  <Child firstName="Daisy" />
...
```
In the Child component, the prop a simply a JS object that is passed from the parent component. Each each value in the prop object can be accessed using dot notation, e.g. `prop.firstName`.

Change the Child component to accept props:

```js
function Child(props) {
  return <h2>Child name: {props.firstName}</h2>
}
```
You can use **ES6** object desctructuring as a shorthand to extract props:

```js
function Child(props) {
  const {firstName} = props;
  return <h2>Child name: {firstName}</h2>
}
```
Alternatively, the props can be extracted directly from the function's parameter list:

```js
function Child({ firstName }) {
  return <h2>Child name: {firstName}</h2>
}

```
## Part 3: Specifying Default Values for Props

You can provide a default value in a component if its parent did not specify any value in the prop. For example code below, if the Parent has a Child component with no **firstName** value, the Child will take default value.

```js
// Child.js
function Child({ firstName = 'UNKNOWN' }) {
  return <h2>Child name: {firstName}</h2>
}
// Parent.js
...
  <Child firstName='Tom' />
  <Child />
...

// RESULTS:
// Child name: Tomato
// Child name: UNKNOWN

```
## Part 4: Forwarding Props in Nested Components

Components can be nested by simply importing them into the return statement. Create a new component called Pet in the `components` folder and import into the Child component:
```js
// Pet.js
function Pet() {
  return (
    <p>I have a pet</p>
  )
}

// Child.js
function Child({ firstName }) {
  return (
    <>
      <h2>Child name: {firstName}</h2>
      <Pet />
    </>
  )
}
```
What if we want to know what type of Pet each Child has? We can specify each pet from the Parent and pass the prop *petType* down tree:

```js
// Parent.js
...
  <Child firstName='Tom' petType='cat'>
  <Child firstName='Charlie' petType='dog'>
  <Child firstName='Daisy' petType='hamster'>
...
```
Modify Child to forward the *petType* prop:

```js
// Childs.js

function Child({ firstName, petType }) {
  return (
    <>
      <h2>Child name: {firstName}</h2>
      <Pet type={petType} />
    </>
  )
}
```
And finally, let Pet accept the *type* component:
```js
// Pet.js
function Pet({ type }) {
  return (
    <p>I have a {type}</p>
  )
}
```
Note that in the above example, the props name can be changed when being passed between components.

## Part 5: Passing JSX components as children props

To nest components within component JSX tags, the parent component will receive the content in a build-in prop called *children*. 

Create a new Card component and apply a style and heading to its children:
```js
// Card.js

function Card({ children }) {
  return (
    <div className='card'>
      <h3>Details</h3>
      <hr />
      {children}
    </div>
  )
}
export default Card;
```

Wrap the Child component JSX within the Card component:
```js
// Child.js

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
```
## Part 6: Compare Functional and Class Components

| Functional Components | Class Components |
|---|---|
| Available from React 16.8 | Available < React 16. |
| Historically limited to viewing content | Used for both viewing and changing state |
| Not internal state | Could contain and manage state |
| Lean code as it is basically a function which returns JSX code | Requires class constructor code overhead || Uses Hooks API | No Hooks availale |

Refer to code to compare between functional and class components.
