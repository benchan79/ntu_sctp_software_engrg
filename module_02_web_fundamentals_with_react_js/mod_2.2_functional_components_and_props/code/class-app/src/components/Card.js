import { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h3>Details</h3>
        <hr />
        {this.props.children}
      </div>
    );
  }
}
export default Card;
