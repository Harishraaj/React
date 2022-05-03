import React from "react";
import Testtwo from "./Testtwo";
class Testone extends React.Component {
  state = {
    name: "harish",
  };
  render() {
    return (
      <div>
        <Testtwo />
        <h1>testone{this.state.name}</h1>
        <h2>parent class</h2>
      </div>
    );
  }
}
export default Testone;
