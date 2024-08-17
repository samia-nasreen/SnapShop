import PlaceOrder from "./PlaceOrder";
import CartSummaryItem from "../../UI/CartSummaryItem";

/* eslint-disable react/prop-types */
const CartSummary = ({
  cartItems,
  totalAmount,
  register,
  handleSubmit,
  onSubmit,
}) => (
  <div className="space-y-4 mt-8 lg:mt-28 lg:pl-16 text-lg">
    <div className="space-y-10 lg:mr-24">
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src={item.image}
              alt={item.name}
              className="h-14 w-14 object-contain"
            />
            <span className="w-48 lg:w-72">{item.name}</span>
          </div>
          <span>${item.totalPrice}</span>
        </div>
      ))}
    </div>
    <div className="pt-6 space-y-4 lg:mr-24">
      <CartSummaryItem label="Subtotal" value={totalAmount} />
      <CartSummaryItem label="Shipping" value="Free" />
      <CartSummaryItem label="Total" value={totalAmount} lastItem />
    </div>
    <PlaceOrder
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  </div>
);

export default CartSummary;
