import React from "react";
import { useNavigate } from "react-router-dom";
import RedButton from "../../UI/RedButton";

interface CartTotalProps {
  totalAmount: number;
  isCartEmpty: boolean;
  formatCurrency: (amount: number) => string;
}

const CartTotal: React.FC<CartTotalProps> = ({ totalAmount, isCartEmpty, formatCurrency }) => {
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

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
        <div className="flex justify-center mt-8">
          <RedButton
            text="Proceed to Checkout"
            onClick={handleProceedToCheckout}
            fontSize="base"
            isDisabled={isCartEmpty}
          />
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
