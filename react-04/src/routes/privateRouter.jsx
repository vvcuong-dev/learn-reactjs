import { Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Product from "../pages/Product.jsx";
import BestSeller from "../pages/BestSeller/BestSeller.jsx";
import BestSellerMonth from "../pages/BestSeller/BestSellerMonth.jsx";
import Users from "../pages/Users.jsx";
import Contact from "../pages/Contact.jsx";
import ThankYou from "../pages/ThankYou.jsx";
import Forbidden from "../pages/Forbidden.jsx";
import AuthMiddleware from "../middlewares/AuthMiddleware.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";
import SuspenseWrap from "../components/SuspenseWrap.jsx";

export const PrivateRouter = () => {
  return (
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<SuspenseWrap path="/pages/About" />} />
      <Route path="/products" element={<AuthMiddleware />}>
        <Route index element={<Product />} />
        <Route path=":id" element={<ProductDetail />} />
        <Route path="best-seller">
          <Route index element={<BestSeller />} />
          <Route path="month" element={<BestSellerMonth />} />
        </Route>
      </Route>

      <Route path="/users" element={<Users />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/403" element={<Forbidden />} />
    </Route>
  );
};
