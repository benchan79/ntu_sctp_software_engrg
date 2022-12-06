import { Component } from "react";

class Pet extends Component {
  render() {
    return (
      <>
        <p>I have a {this.props.type}.</p>
      </>
    );
  }
}
export default Pet;
