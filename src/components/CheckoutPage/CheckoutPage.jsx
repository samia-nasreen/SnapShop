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
import Heading from "../UI/Heading";
import Breadcrumb from "../UI/Breadcrumb";

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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="lg:pr-24">
        <Breadcrumb parts={["Account", "My Account", "Cart", "Checkout"]} />
        <Heading text="Billing Details" />
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
