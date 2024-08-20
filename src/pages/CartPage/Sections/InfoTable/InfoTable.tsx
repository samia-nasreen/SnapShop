import React from "react";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: string;
  category: string;
  rating: number;
  ratingCount: number;
  quantity: number;
  totalPrice: number;
}

interface InfoTableProps {
  cartItems: CartItem[];
  increaseQuantityHandler: (id: number) => void;
  decreaseQuantityHandler: (id: number) => void;
}

const InfoTable: React.FC<InfoTableProps> = ({
  cartItems,
  increaseQuantityHandler,
  decreaseQuantityHandler,
}) => {
  return (
    <>
      <TableHeader />
      <div className="space-y-8">
        {cartItems.map((item) => (
          <TableItem
            key={item.id}
            item={item}
            increaseQuantityHandler={increaseQuantityHandler}
            decreaseQuantityHandler={decreaseQuantityHandler}
          />
        ))}
      </div>
    </>
  );
};

export default InfoTable;
