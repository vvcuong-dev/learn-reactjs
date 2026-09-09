import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>
        <Link to="/" style={{ textDecoration: "underline", color: "red" }}>
          Go back to the homepage
        </Link>
      </p>
    </div>
  );
}
