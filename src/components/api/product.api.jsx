import React from "react";
import config from "../../config.json";
import ProductDetail from "./product-detail";
import ProductAdd from "./product-add";

const { SERVER_API } = config;

export class Product extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      isLoading: true,
      productId: null,
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

  handleClickProduct = (id) => {
    this.setState({ productId: id });
  };

  handleBack = () => {
    this.setState({ productId: null });
  };

  handleAddSuccess = (status) => {
    if (status) {
      this.getProducts();
      alert("Tạo sản phẩm thành công");
    }
  };
  componentDidMount() {
    this.getProducts();
  }

  render() {
    const { products, isLoading, productId } = this.state;
    return (
      <div>
        <ProductAdd onSuccess={this.handleAddSuccess} />
        {isLoading ? (
          <p>Loading...</p>
        ) : productId ? (
          <>
            <ProductDetail id={productId} />
            <button onClick={this.handleBack}>I'm backk</button>
          </>
        ) : (
          <>
            <h2>Danh sách sản phẩm</h2>
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => this.handleClickProduct(product.id)}
                style={{
                  cursor: "pointer",
                  marginBottom: "10px",
                }}
              >
                <p>
                  {product.name} - ${product.price}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    );
  }
}

export default Product;
