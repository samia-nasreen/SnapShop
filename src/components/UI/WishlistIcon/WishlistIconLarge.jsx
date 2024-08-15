/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { wishlistActions } from "../../../store/wishlist";

const WishListIconLarge = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

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
  return (
    <button
      className={`border border-gray-500 p-1 rounded-md`}
      onClick={handleWishlistToggle}
    >
      <svg
        className="w-8 md:w-9 h-8 md:h-9 p-1"
        fill="none"
        stroke={isInWishlist ? "red" : "black"}
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
  );
};

export default WishListIconLarge;
