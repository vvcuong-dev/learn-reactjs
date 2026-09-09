import { navigateToForbidden } from "../utils/forbidden";

export default function Product() {
  const status = false;

  if (!status) {
    return navigateToForbidden();
  }

  return (
    <div>
      <h1>Sản phẩm</h1>
    </div>
  );
}
