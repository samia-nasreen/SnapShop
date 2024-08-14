import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Fragment } from "react";
import { router } from "./router";

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
