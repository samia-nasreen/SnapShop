/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const CartTotal = ({ totalAmount, isCartEmpty, formatCurrency }) => {
  return (
    <div className="w-full md:w-1/2 flex justify-end">
      <div className="border-[1.5px] border-gray-700 px-4 sm:px-6 py-6 sm:py-8 rounded shadow-md w-full sm:w-5/6">
        <h2 className="text-lg sm:text-xl font-medium mb-6 sm:mb-8">
          Cart Total
        </h2>
        <div className="flex justify-between mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-gray-400">
          <span>Subtotal:</span>
          <span>${formatCurrency(totalAmount)}</span>
        </div>
        <div className="flex justify-between mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-gray-400">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-base sm:text-lg">
          <span>Total:</span>
          <span>${formatCurrency(totalAmount)}</span>
        </div>
        <div className="flex justify-center">
          <NavLink
            to="/checkout"
            className={`px-6 sm:px-8 py-3 mt-6 rounded ${
              isCartEmpty
                ? "bg-gray-500 text-white opacity-50 cursor-not-allowed pointer-events-none"
                : "bg-red-500 text-white hover:bg-red-600"
            }`}
          >
            Proceed to Checkout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
