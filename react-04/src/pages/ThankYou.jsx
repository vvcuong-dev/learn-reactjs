import { useLocation } from "react-router-dom";

export default function ThankYou() {
  const location = useLocation();
  console.log("Location :", location);

  return (
    <div>
      <h1>Cảm ơn bạn đã liên hệ!</h1>
      <p>{location.state?.message}</p>
    </div>
  );
}
