// Compare functional component from part 2

import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handlerPlus = this.handlerPlus.bind(this);
    this.handlerMinus = this.handlerMinus.bind(this);
  }
  handlerPlus = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };
  handlerMinus = () => {
    this.setState((state) => {
      return { count: state.count - 1 };
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handlerMinus}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.handlerPlus}>+</button>
      </>
    );
  }
}
export default Counter;
