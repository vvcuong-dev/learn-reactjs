import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./toggle.scss";

export class ToggleState extends React.Component {
  constructor(props) {
    super(props);

    this.showLabel = "Hiện";
    this.hideLabel = "Ẩn";

    this.state = {
      toggle: {
        isShow: false,
        label: this.showLabel,
      },
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      toggle: {
        isShow: !prevState.toggle.isShow,
        label: prevState.toggle.isShow ? this.showLabel : this.hideLabel,
      },
    }));
  };

  render() {
    const { isShow, label } = this.state.toggle;
    return (
      <>
        <div style={{ margin: "20px" }}>
          <button
            type="button"
            onClick={this.handleToggle}
            className="btn btn-primary"
          >
            {label}
          </button>
          <div className={`content ${isShow ? "show" : ""}`}>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quod.
          </div>
        </div>
      </>
    );
  }
}

export default ToggleState;
