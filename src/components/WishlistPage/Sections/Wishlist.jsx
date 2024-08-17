import { useSelector, useDispatch } from "react-redux";
import { wishlistActions } from "../../../store/wishlist";
import { cartActions } from "../../../store/cart";
import TransparentButton from "../../UI/TransparentButton";
import EmptyMessage from "../../UI/EmptyMessage";
import ProductsGrid from "../../UI/ProductsGrid";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const isWishlistEmpty = wishlist.length === 0;

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
        {!isWishlistEmpty && (
          <TransparentButton
            text="Move All to Cart"
            onClick={moveAllToCartHandler}
          />
        )}
      </div>
      <EmptyMessage
        message="No items added to wishlist"
        isEmpty={isWishlistEmpty}
      />
      <ProductsGrid products={wishlist} />
    </div>
  );
};

export default Wishlist;
