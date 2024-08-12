import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Helpers/Root";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment } from "react";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import ErrorPage from "./components/Helpers/ErrorPage";
import SignUpForm from "./components/Auth/SignUpForm";
import LoginForm from "./components/Auth/LoginForm";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import WishlistPage from "./components/WishlistPage/WishlistPage";
import ProductDetailPage from "./components/ProductDetailPage/ProductDetailPage";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import ProtectedRoute from "./components/Helpers/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/signup", element: <SignUpForm /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/wishlist", element: <WishlistPage /> },
      { path: "/products/:productId", element: <ProductDetailPage /> },
      { path: "/checkout", element: <ProtectedRoute element={<Checkout />} /> },
      { path: "/cart", element: <Cart /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
