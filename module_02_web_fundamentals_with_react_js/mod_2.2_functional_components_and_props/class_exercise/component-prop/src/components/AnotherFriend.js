import React from "react";
import Pet from "./Pet";

class AnotherFriend extends React.Component {
  render() {
    const { fName, petType } = this.props;
    return (
      <>
        <h2>This is a Class component, AnotherFriend</h2>
        <h4>
          My name is {fName}.
          <Pet type={petType} />
        </h4>
      </>
    );
  }
}

export default AnotherFriend;
