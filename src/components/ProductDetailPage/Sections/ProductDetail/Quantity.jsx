/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/cart";
import { useState } from "react";

const Quantity = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productData = {
      id: product.id,
      name: product.title,
      image: product.image,
      price: product.price,
      quantity,
    };

    dispatch(cartActions.addToCart(productData));
    setQuantity(1);
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };
  return (
    <>
      <div className="flex items-center border-[1px] border-gray-500 rounded">
        <button
          className="px-2 md:px-3 py-1 md:py-2 text-2xl border-r-[1px] border-gray-500 focus:bg-red-500 focus:text-white"
          onClick={() => handleQuantityChange(-1)}
        >
          -
        </button>
        <span className="w-10 md:w-14 text-center md:text-xl font-semibold">
          {quantity}
        </span>
        <button
          className="px-2 md:px-3 py-1 md:py-2 text-2xl border-l-[1px] border-gray-500 focus:bg-red-500 focus:text-white"
          onClick={() => handleQuantityChange(1)}
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-red-500 text-white px-3 md:px-6 h-10 md:h-12 rounded"
      >
        Add To Cart
      </button>
    </>
  );
};

export default Quantity;
