import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import Table from "./Sections/InfoTable";
import Coupon from "./Sections/Coupon";
import CartTotal from "./Sections/CartTotal";
import CartActions from "./Sections/CartActions";
import EmptyCartMessage from "./Sections/EmptyCart";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const increaseQuantityHandler = (id) => {
    dispatch(cartActions.increaseQuantity(id));
  };

  const decreaseQuantityHandler = (id) => {
    dispatch(cartActions.decreaseQuantity(id));
  };

  const formatCurrency = (amount) => {
    if (amount > 0) return amount.toFixed(2);
    return 0;
  };

  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="container px-8 sm:px-8 mx-auto pb-32">
      <div className="text-xs text-gray-500 mb-8 mt-10">
        <span className="mr-2">Home</span> /{" "}
        <span className="ml-2 text-black">Cart</span>
      </div>
      {isCartEmpty && <EmptyCartMessage />}
      {!isCartEmpty && (
        <Table
          cartItems={cartItems}
          increaseQuantityHandler={increaseQuantityHandler}
          decreaseQuantityHandler={decreaseQuantityHandler}
          formatCurrency={formatCurrency}
        />
      )}
      <CartActions />
      <div className="flex flex-col md:flex-row justify-between items-start mt-20">
        <Coupon />
        <CartTotal
          totalAmount={totalAmount}
          isCartEmpty={isCartEmpty}
          formatCurrency={formatCurrency}
        />
      </div>
    </div>
  );
};

export default Cart;
