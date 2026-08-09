import "./App.css";

/**
 * 1. Render có điều kiện
 *  - dùng if else
 *  - dùng toán tử 3 ngôi
 * 2. Render với vòng lặp (map)
 *
 */

function getProduct(product) {
  if (product.status === 1) {
    return (
      <>
        <h3>
          Name: {product.name} - ID: {product.id}
        </h3>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <p>
          Status:{" "}
          <span style={{ color: product.status === 1 ? "green" : "red" }}>
            {product.status === 1 ? "Còn hàng" : "Hết hàng"}
          </span>
        </p>
      </>
    );
  }
}

const products = [
  {
    id: 1,
    name: "Iphone 14",
    price: 2000,
    description: "Sản phẩm mới nhất của Apple",
    status: 1,
  },
  {
    id: 2,
    name: "Iphone 13",
    price: 1500,
    description: "Sản phẩm cũ của Apple",
    status: 0,
  },
  {
    id: 3,
    name: "Iphone 12",
    price: 1000,
    description: "Sản phẩm cũ của Apple",
    status: 1,
  },
];

const productList = products.map((product) => {
  return <div key={product.id}>{getProduct(product)}</div>;
});

function App() {
  return (
    <>
      <h2>Danh sách sản phẩm</h2>
      {productList}
    </>
  );
}

export default App;
