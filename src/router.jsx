import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Helpers/Root";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import ErrorPage from "./components/Helpers/ErrorPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import LoginPage from "./components/LoginPage/LoginPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import WishlistPage from "./components/WishlistPage/WishlistPage";
import ProductDetailPage from "./components/ProductDetailPage/ProductDetailPage";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import ProtectedRoute from "./components/Helpers/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/wishlist", element: <WishlistPage /> },
      { path: "/products/:productId", element: <ProductDetailPage /> },
      { path: "/checkout", element: <ProtectedRoute element={<Checkout />} /> },
      { path: "/cart", element: <Cart /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);
