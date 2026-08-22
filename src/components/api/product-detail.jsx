import React from "react";
import config from "../../config.json";

const { SERVER_API } = config;

export class productDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null,
    };
  }

  getProduct = async (id) => {
    const response = await fetch(`${SERVER_API}/products/${id}`);
    if (response.ok) {
      const product = await response.json();
      this.setState({ product });
    }
  };

  componentDidMount() {
    const { id } = this.props;
    this.getProduct(id);
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <h2>Chi tiết sản phẩm</h2>
        {product && (
          <div>
            <p>tên: {product.name}</p>
            <p>giá: {product.price}</p>
          </div>
        )}
      </div>
    );
  }
}

export default productDetail;
