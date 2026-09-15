import style from "./Product.module.css";

export default function Product() {
  return (
    <div className="product">
      <h1>Hello, Product</h1>
      <button className={style.btn}>Xem chi tiết</button>
    </div>
  );
}
