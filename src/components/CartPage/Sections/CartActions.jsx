import { NavLink } from "react-router-dom";
import { cartActions } from "../../../store/cart";
import { useDispatch } from "react-redux";

const CartActions = () => {
  const dispatch = useDispatch();

  const handleClearCartButton = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between mt-8">
      <NavLink
        to="/"
        className="bg-white border border-gray-600 text-center text-gray-900 font-medium px-6 sm:px-8 py-3 rounded mb-4 sm:mb-0"
      >
        Return To Shop
      </NavLink>
      <button
        onClick={handleClearCartButton}
        className="bg-white border border-gray-600 text-gray-900 font-medium px-6 sm:px-8 py-3 rounded"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartActions;
