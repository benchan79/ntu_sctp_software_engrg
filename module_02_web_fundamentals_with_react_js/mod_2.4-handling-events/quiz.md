# Quiz
## Handling Events

### Q1: Which of the following does not describe an event?

- A. Events are what we see visually on the browser.
- B. Events are consequence of actions performed by the user or the browser.
- C. Events are triggered by clicking, scrolling, page loading and etc.
- D. Events are not unique to JavaScript or web browser, but server-side too.
---
### Q2: Which of the following line of code describe handling onClick event correctly?

- A: `<button eventClick="handleClickEvent()">Click me</button>`
- B: `<button onclick="handleClickEvent">Click me</button>`
- C: `<button onclick="handleClickEvent()">Click me</button>`
- D: `<button click="handleClickEvent()">Click me</button>`
---
### Q3: Which of the following is not a valid DOM event?

- A: onChange
- B: onBlur
- C: onDrag
- D: onPush
---
### Q4: Which one of the following statements is valid?

- A: In JSX, handlers are passed as strings
- B: A component will refresh on the virtual DOM when a state variable is changed
- C: A component will refresh synchronously, i.e. in the same order as the code is executed
- D: The naming convention for JSX event functions is to use lowercase
---
### Q5: Which one of the following statements best describes a higher-order function

- A: Can only be written as an arrow function
- B: Executes synchronously in a React component
- C: Passes props to its child component function
- D: Takes another function as an argument or returns a function
---
### Q6: How are event handlers passed from a parent to a child component?

- A: Expressions
- B: Attributes
- C: Props
- D: Strings
---
### Q7: How do you pass the right props to a component with the following function:
```js
function Input({ name, age, onChange }) 
```
- A: `<Input name='James' age='8' onChange={handlerChange()} />`
- B: `<Input 'James', 38, handlerChange()/>`
- C: `<Input name='James' age='38' onChange={handlerChange}/>`
- D: `<Input name='James' age='38' onChange='handlerChange'/>`
---

### Q8: Which of the following code snippet reads a value from event handler `handlerChange`?

- A: `const handlerChange = () = { onChange(event.target.value) }`
- B: `const handlerChange = (event) = { onChange(event.value) }`
- C: `const handlerChange = (event) = { onChange(event.target.value) }`
- D: `const handlerChange = (value) = { onChange(event.value) }`
---

### Q9: How do you prevent a default action upon an event being triggered?

- A: Invoke `event.stop()` function in the callback function.
- B: Invoke `event.cancelBehavior()` function in the callback function.
- C: Invoke `event.preventDefault()` function in the callback function.
- D: Invoke `event.preventAction()` function in the callback function.
---

### Q10: Which of the following behaviour does not trigger an event?

- A: Web page has finished loading
- B: Input field was changed
- C: Button was clicked.
- D: Web page was closed.
