import React from "react";
import config from "../../config.json";
const { SERVER_API } = config;

export class productAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        price: 0,
      },
    };
  }

  handleChange = (event) => {
    const data = { ...this.state.form };
    data[event.target.name] = event.target.value;
    this.setState({ form: data });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, price } = this.state.form;
    this.postProduct({ name, price });
  };

  postProduct = async (data) => {
    const response = await fetch(`${SERVER_API}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      this.props.onSuccess(true);
      this.setState({
        form: {
          name: "",
          price: 0,
        },
      });
    }
  };

  render() {
    const { name, price } = this.state.form;

    return (
      <div>
        <h2>Tạo sản phẩm</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="name">Tên sản phẩm:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={this.handleChange}
              value={name}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="price">Giá sản phẩm:</label>
            <input
              type="number"
              id="price"
              name="price"
              onChange={this.handleChange}
              value={price}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "blue",
              color: "white",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Tạo sản phẩm
          </button>
        </form>
      </div>
    );
  }
}

export default productAdd;
