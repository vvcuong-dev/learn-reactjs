import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <p>ID: {id}</p>
    </div>
  );
}
