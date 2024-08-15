import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema } from "../../schemas/checkoutSchema";
import { ordersActions } from "../../store/orders";
import { cartActions } from "../../store/cart";
import CartSummary from "./Sections/CartSummary";
import CheckoutForm from "./Sections/CheckoutForm";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
  });

  const onSubmit = (data) => {
    const orderDetails = {
      ...data,
      paymentMethod: data.paymentMethod || "Cash on delivery",
      cartItems,
      totalAmount,
    };

    dispatch(ordersActions.placeOrder(orderDetails));
    dispatch(cartActions.clearCart());
    console.log(data);
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="lg:pr-24">
        <div className="text-xs text-gray-500 mb-12 mt-2">
          <span className="mr-2">Account</span> /{" "}
          <span className="mr-2 ml-2">My Account</span> /{" "}
          <span className="mr-2 ml-2">Cart</span> /{" "}
          <span className="ml-2 text-black">Checkout</span>
        </div>
        <h2 className="text-4xl font-medium mb-10">Billing Details</h2>
        <CheckoutForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
      </div>
      <CartSummary
        cartItems={cartItems}
        totalAmount={totalAmount}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Checkout;
