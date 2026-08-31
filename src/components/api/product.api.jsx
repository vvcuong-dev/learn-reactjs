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

  deleteProduct = async (id) => {
    const response = await fetch(`${SERVER_API}/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      this.getProducts();
    }
  };

  handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      this.deleteProduct(id);

      alert("Xóa sản phẩm thành công");
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
                style={{
                  cursor: "pointer",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid #ccc",
                    padding: "10px",
                  }}
                >
                  <p onClick={() => this.handleClickProduct(product.id)}>
                    {product.name} - ${product.price}
                  </p>
                  <button
                    type="button"
                    onClick={() => this.handleDelete(product.id)}
                  >
                    Xóa
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    );
  }
}

export default Product;
