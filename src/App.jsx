import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Helpers/Root";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment } from "react";
import HomePage from "./components/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h2>Error!</h2>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
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
