import React from "react";
import { formatCurrency } from "../../utils/formatCurrency";

interface CartSummaryItemProps {
  label: string;
  value: number | string;
  lastItem?: boolean;
}

const CartSummaryItem: React.FC<CartSummaryItemProps> = ({
  label,
  value,
  lastItem = false,
}) => {
  return (
    <div
      className={`flex justify-between ${
        !lastItem
          ? "mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-gray-400"
          : "text-base sm:text-lg"
      }`}
    >
      <span>{label}:</span>
      <span>
        {typeof value === "number" ? `$${formatCurrency(value)}` : value}
      </span>
    </div>
  );
};

export default CartSummaryItem;
