import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import Table from "./Sections/InfoTable/InfoTable";
import Coupon from "./Sections/Coupon";
import CartTotal from "./Sections/CartTotal";
import CartActions from "./Sections/CartActions";
import EmptyMessage from "../UI/EmptyMessage";
import Breadcrumb from "../UI/Breadcrumb";

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
    return "0.00";
  };

  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="container px-8 sm:px-8 mx-auto pb-32">
      <Breadcrumb parts={["Home", "Cart"]} />
      <EmptyMessage message="Your cart is empty" isEmpty={isCartEmpty} />
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
