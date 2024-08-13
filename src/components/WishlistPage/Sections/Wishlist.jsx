import { useSelector, useDispatch } from "react-redux";
import { wishlistActions } from "../../../store/wishlist";
import { cartActions } from "../../../store/cart";
import ProductCard from "../../UI/ProductCard";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  const moveAllToCartHandler = () => {
    wishlist.forEach((product) => {
      dispatch(cartActions.addToCart({ ...product, quantity: 1 }));
    });

    dispatch(wishlistActions.clearWishlist());
  };

  return (
    <div className="container mx-auto my-10 p-5">
      <div className="flex flex-row justify-between items-center mb-5">
        <h2 className="text-lg sm:text-2xl">Wishlist ({wishlist.length})</h2>
        {wishlist.length > 0 && (
          <button
            onClick={moveAllToCartHandler}
            className="mt-3 sm:mt-0 px-4 py-2 sm:px-6 sm:py-3 border border-gray-900 rounded-md text-sm sm:text-base"
          >
            Move All To Cart
          </button>
        )}
      </div>

      <div className="flex flex-wrap -m-4">
        {wishlist.map((product) => (
          <div className="p-4 w-full sm:w-1/2 lg:w-1/4" key={product.id}>
            <ProductCard product={product} isWishlistPage />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
