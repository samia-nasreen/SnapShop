import { NavLink } from "react-router-dom";

const CartActions = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between mt-8">
      <NavLink
        to="/"
        className="bg-white border border-gray-600 text-center text-gray-900 font-medium px-6 sm:px-8 py-3 rounded mb-4 sm:mb-0"
      >
        Return To Shop
      </NavLink>
      <button className="bg-white border border-gray-600 text-gray-900 font-medium px-6 sm:px-8 py-3 rounded">
        Update Cart
      </button>
    </div>
  );
};

export default CartActions;
