import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Helpers/Root";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ErrorPage from "./components/Helpers/ErrorPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import Cart from "./pages/CartPage/CartPage";
import Checkout from "./pages/CheckoutPage/CheckoutPage";
import ProtectedRoute from "./components/Helpers/ProtectedRoute";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";

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
      { path: "/products", element: <AllProductsPage /> },
      { path: "/products/:productId", element: <ProductDetailPage /> },
      { path: "/checkout", element: <ProtectedRoute element={<Checkout />} /> },
      { path: "/cart", element: <Cart /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);
