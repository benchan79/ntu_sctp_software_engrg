# Quiz
## Functional Components and Props

### Q1: You can only create a component using the function syntax.
- A: True
- B: False
---
### Q2: What are props?
- A: Props are used to transfer data from client to server.
- B: Props are used to consume API calls.
- C: Props are read-only objects passed into the component from a parent component.
- D: Props are used to encapsulate data for other components' consumption.
---
### Q3: How are props passed into a component?
- A: They are passed as a parameter (functional component).
- B: They are passed by using CommonJS modularization syntax.
- C: They are passed by using ES6 modularization syntax.
- D: They are passed through events.
---
### Q4: Props are read-only.
- A: True
- B: False
---
### Q5: Which of the following correctly demonstrate passing props.
- A: `<Child>{props:{name:"my name}}</Child>`
- B: `<Child {name:"my name}></Child>`
- C: `<Child></Child name="my name">`
- D: `<Child name="my name"></Child>`
---
### Q6: Objects can be passed as props.
- A: True
- B: False
---
### Q7: Which of the following is an example of the correct way of reading props
```
A: function Child({props}) {
  return <h2>Child name: {firstName}</h2>
}
```
```
B: function Child(props) {
  return <h2>Child name: {props.firstName}</h2>
}
```
```
C: function Child(props) {
  return <h2>Child name: {firstName}</h2>
}
```
```
D: function Child(props) {
  return <h2>Child name: props.firstName</h2>
}
```
---
### Q8: Props should always have defined values.
- A. True
- B. False
---
### Q9: JSX components can be passed as props
- A. True
- B. False
---
### Q10: Which of the following is an example of the correct way to add default values to props:
```
A: function Child({props.firstName = 'UNKNOWN' }) {
  return <h2>Child name: {firstName}</h2>
}
```
```
B: function Child(firstName = 'UNKNOWN') {
  return <h2>Child name: {firstName}</h2>
}
```
```
C: function Child({ firstName : 'UNKNOWN' }) {
  return <h2>Child name: {firstName}</h2>
}
```
```
D: function Child({ firstName = 'UNKNOWN' }) {
  return <h2>Child name: {firstName}</h2>
}
```
