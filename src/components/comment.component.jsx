import React from "react";

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.name = "Cuong vu";
  }

  showContent = () => {
    console.log(this.name);
  };

  render() {
    const { title, content } = this.props;
    return (
      <div className="comment">
        <h3 style={{ color: "blue" }}>{title}</h3>
        <p style={{ color: "green" }}>{content}</p>
        <button onClick={this.showContent}>Show Name</button>
      </div>
    );
  }
}

export default Comment;
