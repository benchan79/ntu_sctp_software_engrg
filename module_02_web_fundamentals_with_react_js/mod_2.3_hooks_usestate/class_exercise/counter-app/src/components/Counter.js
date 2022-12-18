import './App.css';
import React, { useState } from 'react';

// function countInitial() {
//   console.log('run function')
//   return 0
// }

function App() {

  // useState() runs everytime the component re-renders
  // If the useState takes a very complicated function as state,
  // it would be extremely costly.

  // useState has another way to pass in the state.
  // It can take a function version, which gets called
  // ONLY the very first time the component renders.

  // Runs everytime the component re-renders
  // const [count, setCount] = useState(countInitial())

  // Only runs the first the component renders
  // const [count, setCount] = useState(() => countInitial())

  // const [state, setState] = useState({count:4, theme:'blue'})
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('blue')
  // const count = state.count;
  // const theme = state.theme;

  // const [count, setCount] = useState(0)

  // function handlerMinus() {
  //   setCount(
  //     function(prevCount) {
  //       return  prevCount - 1
  //     }
  //   )
  //   setCount(
  //     function(prevCount) {
  //       return  prevCount - 1
  //     }
  //   )
  // }

  // function handlerMinus() {
  //   setCount(prevCount => prevCount -1)
  //   setCount(prevCount => prevCount -1)
  // }

  // function handlerMinus() {
  //   setCount(count -1)
  //   setCount(count -1)
  // }
  

  function handlerMinus() {
    setCount(prevCount => prevCount -1)
    setTheme('blue')
  }

  function handlerPlus() {
    setCount(prevCount => prevCount +1)
    setTheme('red')
  }
  // function handlerPlus() {
  //   setCount(prevCount => prevCount +1)
  // }

  // function handlerMinus() {
  //   setState(prevState => {
  //     return {...prevState, count: prevState.count - 1}
  //   })
  // }

  // function handlerPlus() {
  //   setState(prevState => {
  //     return {...prevState, count: prevState.count + 1}
  //   })
  // }

  return (
    <>
      <button onClick={handlerMinus} >-</button>
      <span> {count} </span>
      <span> {theme} </span>
      <button onClick={handlerPlus}>+</button>
    </>
  );
}

export default App;
