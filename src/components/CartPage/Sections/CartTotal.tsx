import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";
import Heading from "../../UI/Heading";
import CartSummaryItem from "../../UI/CartSummaryItem";

interface CartTotalProps {
  totalAmount: number;
  isCartEmpty: boolean;
}

const CartTotal: React.FC<CartTotalProps> = ({ totalAmount, isCartEmpty }) => {
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="w-full md:w-1/2 flex justify-end">
      <div className="border-[1.5px] border-gray-700 px-4 sm:px-6 py-6 sm:py-8 rounded shadow-md w-full sm:w-5/6">
        <Heading text="Cart Total" fontSize="text-lg sm:text-xl" />
        <CartSummaryItem label="Subtotal" value={totalAmount} />
        <CartSummaryItem label="Shipping" value="Free" />
        <CartSummaryItem label="Total" value={totalAmount} lastItem />
        <div className="flex justify-center mt-8">
          <Button
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
