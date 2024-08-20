import { useDispatch } from "react-redux";
import { useState } from "react";
import { cartActions } from "../../../../store/cart";
import Button from "../../../../components/UI/Button";
import React from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  discount: number;
  price: number;
  originalPrice: string;
  category: string;
  rating: number;
  ratingCount: number;
  totalPrice?: number;
}

interface QuantitySelectorProps {
  product: Product;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productData = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      category: product.category,
      rating: product.rating,
      ratingCount: product.ratingCount,
      originalPrice: product.originalPrice,
      totalPrice: product.price,
      quantity,
    };

    dispatch(cartActions.addToCart(productData));
    setQuantity(1);
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="flex items-center space-x-3 md:space-x-1">
      <div className="flex items-center md:w-40">
        <button
          className="px-3 md:px-4 py-3 text-lg md:text-xl border border-gray-500 rounded-l focus:border-white focus:bg-red-500 focus:text-white transition-colors duration-300"
          onClick={() => handleQuantityChange(-1)}
        >
          -
        </button>
        <div className="w-14 py-3 border-y border-gray-500 text-center text-lg md:text-xl font-semibold">
          {quantity}
        </div>
        <button
          className="px-3 md:px-4 py-3 text-lg md:text-xl border border-gray-500 rounded-r focus:border-white focus:bg-red-500 focus:text-white transition-colors duration-300"
          onClick={() => handleQuantityChange(1)}
        >
          +
        </button>
      </div>
      <Button text="Add To Cart" onClick={handleAddToCart} />
    </div>
  );
};

export default QuantitySelector;
