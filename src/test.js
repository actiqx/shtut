import React, { Component } from "react";

export default class Test extends Component {
  state = { person: { name: "aaaa", age } };
  componentDidMount() {
    ///http call
    //set state
    this.setState({ abc: "ppp" });
  }

  render() {
    return <div>{this.state.abc}</div>;
  }
}
