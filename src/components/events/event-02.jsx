import React from "react";

class Event02 extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (text) => {
    console.log("Input value changed: ", text);
  };

  render() {
    return (
      <>
        <h1>Sự kiện trong React - 02</h1>
        <button type="button" onClick={() => this.handleChange("New value")}>
          Click me
        </button>
      </>
    );
  }
}

export default Event02;
