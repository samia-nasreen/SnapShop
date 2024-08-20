import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/UI/Button";
import Heading from "../../../components/UI/Heading";
import CartSummaryItem from "../../../components/UI/CartSummaryItem";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

interface CartTotalProps {
  totalAmount: number;
  isCartEmpty: boolean;
}

const CartTotal: React.FC<CartTotalProps> = ({ totalAmount, isCartEmpty }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  const handleProceedToCheckout = () => {
    if (!isAuthenticated) {
      toast.error("Please log in first");
      navigate("/login");
      return;
    }
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
