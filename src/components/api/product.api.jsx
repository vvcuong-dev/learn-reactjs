import React from "react";
import config from "../../config.json";

const { SERVER_API } = config;

export class Product extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      isLoading: true,
    };
  }

  getProducts = async () => {
    const response = await fetch(`${SERVER_API}/products`);

    if (response.ok) {
      const products = await response.json();
      this.setState({ products: products, isLoading: false });
    } else {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const { products, isLoading } = this.state;
    return (
      <div>
        <h2 style={{ color: "blue" }}>List of Products</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => (
            <div key={product.id}>
              <p>
                {product.name} - ${product.price}
              </p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Product;
