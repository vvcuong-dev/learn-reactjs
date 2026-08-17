import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    const { count } = props;
    this.state = {
      count: count,
    };
  }

  // Cach 1: Sử dụng arrow function để định nghĩa các phương thức tăng và giảm count

  //   increaseCount = () => {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   };

  //   decreaseCount = () => {
  //     this.setState({
  //       count: this.state.count > 0 ? this.state.count - 1 : 0,
  //     });
  //   };

  // Cach 2: Su dung setState với callback function để đảm bảo giá trị count được cập nhật chính xác.
  increaseCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decreaseCount = () => {
    this.setState((prevState) => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0,
    }));
  };

  render() {
    return (
      <>
        <div>
          <h1>Count: {this.state.count}</h1>
          <button
            type="button"
            onClick={this.increaseCount}
            style={{ color: "white", backgroundColor: "green" }}
          >
            Increase
          </button>
          <button
            type="button"
            onClick={this.decreaseCount}
            style={{ color: "white", backgroundColor: "red" }}
          >
            Decrease
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
