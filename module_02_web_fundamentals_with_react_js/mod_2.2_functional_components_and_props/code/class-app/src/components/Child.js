import { Component } from "react";

import Pet from "./Pet";
import Card from "./Card";

class Child extends Component {
  render() {
    const { firstName, petType } = this.props;
    return (
      <Card>
        <h2>Child name: {firstName}</h2>
        <Pet type={petType} />
      </Card>
    );
  }
}

export default Child;
