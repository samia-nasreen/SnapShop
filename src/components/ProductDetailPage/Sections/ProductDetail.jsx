import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { wishlistActions } from "../../../store/wishlist";
import { cartActions } from "../../../store/cart";
import deliveryIcon from "../../../assets/delivery_icon.svg";
import returnIcon from "../../../assets/return_icon.svg";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("M");

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${
            i <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleWishlistToggle = () => {
    const productData = {
      id: product.id,
      name: product.title,
      image: product.image,
      discount: Math.floor(Math.random() * 50) + 10,
      price: product.price,
      originalPrice: (product.price * (1 + Math.random() * 0.5)).toFixed(2),
      rating: product.rating.rate,
      ratingCount: product.rating.count,
    };

    if (isInWishlist) {
      dispatch(wishlistActions.removeFromWishlist(product.id));
    } else {
      dispatch(wishlistActions.addToWishlist(productData));
    }
  };

  const handleAddToCart = () => {
    const productData = {
      id: product.id,
      name: product.title,
      image: product.image,
      price: product.price,
      quantity, 
      color: selectedColor,
      size: selectedSize,
    };

    dispatch(cartActions.addToCart(productData));
    setQuantity(1);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 p-4 max-w-7xl mx-auto mt-8 mb-20">
      <div className="flex flex-grow w-2/3 h-[615px]">
        <div className="flex flex-col justify-between w-[150px] h-full space-y-2">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="h-[135px] w-full border-[1px] rounded-sm"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain rounded-sm shadow-md p-6"
              />
            </div>
          ))}
        </div>
        <div className="flex-1 border-[1px] rounded-sm h-full ml-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain rounded-sm shadow-md p-12"
          />
        </div>
      </div>
      <div className="lg:w-1/3 flex flex-col space-y-4 pl-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          {product.title}
        </h1>
        <div className="flex items-center h-4">
          <div className="flex items-center">
            {renderStars(product.rating.rate)}
          </div>
          <span className="ml-2 text-gray-500">
            ({product.rating.count} Reviews)
          </span>
          <span className="text-gray-500 px-4">|</span>
          <span className="text-green-500">In Stock</span>
        </div>
        <div className="text-[28px] font-medium text-gray-900">
          ${product.price}
        </div>
        <p className="text-sm text-black pb-2">{product.description}</p>
        <div className="border-[1px] border-gray-400"></div>
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-3 items-center">
            <span className="text-lg text-gray-900 mr-2">Colours:</span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name="color"
                className="hidden"
                onChange={() => handleColorChange("blue")}
                defaultChecked={selectedColor === "blue"}
              />
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  selectedColor === "blue" ? "ring-2 ring-gray-800" : ""
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-blue-300"></span>
              </span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name="color"
                className="hidden"
                onChange={() => handleColorChange("red")}
                defaultChecked={selectedColor === "red"}
              />
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  selectedColor === "red" ? "ring-2 ring-gray-800" : ""
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-red-400"></span>
              </span>
            </label>
          </div>

          <div className="flex space-x-4 items-center space-y-2">
            <span className="text-lg text-gray-900 mt-2 mr-2">Size:</span>
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                onClick={() => handleSizeChange(size)}
                className={`w-8 h-8 rounded font-medium text-sm flex items-center justify-center ${
                  selectedSize === size
                    ? "bg-red-500 text-white"
                    : "border-[1px] border-gray-900 text-gray-600 shadow-sm"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex space-x-4 pt-2 pb-4 items-center">
          <div className="flex items-center border-[1px] border-gray-500 rounded">
            <button
              className="px-3 py-2 text-2xl border-r-[1px] border-gray-500 focus:bg-red-500 focus:text-white"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <span className="w-14 text-center text-xl font-semibold">
              {quantity}
            </span>
            <button
              className="px-3 py-2 text-2xl border-l-[1px] border-gray-500 focus:bg-red-500 focus:text-white"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-red-500 text-white px-6 h-12 rounded"
          >
            Add To Cart
          </button>
          <button
            className={`border border-gray-500 p-1 rounded-md`}
            onClick={handleWishlistToggle}
          >
            <svg
              className="w-9 h-9 p-1"
              fill="none"
              stroke={isInWishlist ? "red" : "black"}
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>

        <div className="border border-gray-600 rounded-md max-w-[420px]">
          <div className="flex items-center p-4 border-b border-gray-600">
            <img
              src={deliveryIcon}
              alt="Free Delivery Icon"
              className="w-8 h-8 mr-4"
            />
            <div>
              <h3 className="font-medium mb-1">Free Delivery</h3>
              <Link
                to="#"
                className="text-xs font-medium underline underline-offset-1"
              >
                Enter your postal code for Delivery Availability
              </Link>
            </div>
          </div>
          <div className="flex items-center p-4">
            <img
              src={returnIcon}
              alt="Return Delivery Icon"
              className="w-8 h-8 mr-4"
            />
            <div>
              <h3 className="font-medium mb-2">Return Delivery</h3>
              <p className="text-xs font-medium">
                Free 30 Days Delivery Returns.{" "}
                <Link to="#" className="underline underline-offset-1">
                  Details
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
