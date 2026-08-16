import React from "react";

export class Customer extends React.Component {
  constructor(props) {
    super(props);

    // Khai báo state, thiết lập giá trị ban đầu
    this.state = {
      info: props.info,
    };
  }

  changeInfo = () => {
    // thay đổi state, cập nhật giá trị mới
    this.setState({
      info: {
        name: "Jane Smith",
        email: "jane@gmail.com",
      },
    });
  };

  resetInfo = () => {
    this.setState({
      info: this.props.info,
    });
  };

  render() {
    const { name, email } = this.state.info;
    return (
      <div>
        <h2>Tên: {name} </h2>
        <h2>Email: {email} </h2>
        <button
          type="button"
          style={{ color: "blue" }}
          onClick={this.changeInfo}
        >
          Change Info
        </button>
        <button type="button" style={{ color: "red" }} onClick={this.resetInfo}>
          Reset Info
        </button>
      </div>
    );
  }
}

export default Customer;
