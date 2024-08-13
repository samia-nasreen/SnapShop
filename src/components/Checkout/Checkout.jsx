import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ordersActions } from "../../store/orders";
import { cartActions } from "../../store/cart";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  streetAddress: yup.string().required("Street Address is required"),
  city: yup.string().required("Town/City is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

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
    resolver: yupResolver(schema),
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 text-zinc-400"
        >
          <div>
            <label className="block mb-2">
              First Name
              <span className="text-red-500">*</span>
            </label>
            <input
              {...register("firstName")}
              className="w-full p-4 border-none bg-zinc-100 rounded"
            />
            <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
          </div>
          <div>
            <label className="block mb-2">Company Name</label>
            <input
              {...register("companyName")}
              className="w-full p-4 border-none bg-zinc-100 rounded"
            />
          </div>
          <div>
            <label className="block mb-2">
              Street Address
              <span className="text-red-500">*</span>
            </label>
            <input
              {...register("streetAddress")}
              className="w-full p-4 border-none bg-zinc-100 rounded"
            />
            <p className="text-red-500 text-sm">
              {errors.streetAddress?.message}
            </p>
          </div>
          <div>
            <label className="block mb-2">
              Apartment, floor, etc. (optional)
            </label>
            <input
              {...register("apartment")}
              className="w-full p-4 border-none bg-zinc-100 rounded"
            />
          </div>
          <div>
            <label className="block mb-2">
              Town/City
              <span className="text-red-500">*</span>
            </label>
            <input
              {...register("city")}
              className="w-full p-4 border-none bg-zinc-100 rounded"
            />
            <p className="text-red-500 text-sm">{errors.city?.message}</p>
          </div>
          <div>
            <label className="block mb-2">
              Phone Number
              <span className="text-red-500">*</span>
            </label>
            <input
              {...register("phoneNumber")}
              className="w-full p-4 border-none bg-zinc-100 rounded"
            />
            <p className="text-red-500 text-sm">
              {errors.phoneNumber?.message}
            </p>
          </div>
          <div>
            <label className="block mb-2">
              Email Address
              <span className="text-red-500">*</span>
            </label>
            <input
              {...register("email")}
              className="w-full p-4 border-none bg-zinc-100 rounded"
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="saveInfo"
              className="mr-4 h-6 w-6 appearance-none border-[1.5px] border-zinc-300 rounded-sm checked:bg-red-500 checked:border-red-500 checked:icon-white focus:ring-0"
            />
            <label htmlFor="saveInfo" className="text-black">
              Save this information for faster check-out next time
            </label>
          </div>
        </form>
      </div>

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
        <div className="pt-6 space-y-2 lg:mr-24">
          <div className="border-b-[1.5px] border-gray-400 pb-4 flex justify-between">
            <span>Subtotal:</span>
            <span>${totalAmount}</span>
          </div>
          <div className="border-b-[1.5px] border-gray-400 pt-2 pb-4 flex justify-between">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="pt-2 flex justify-between">
            <span>Total:</span>
            <span>${totalAmount}</span>
          </div>
        </div>

        <div className="space-y-6 pt-2">
          <div className="flex items-center justify-between">
            <div>
              <input
                type="radio"
                id="bank"
                {...register("paymentMethod")}
                value="Bank"
                className="appearance-none w-6 h-6 mr-2 border-[1.5px] border-black checked:bg-black checked:ring-transparent focus:ring-0"
              />
              <label htmlFor="bank" className="ml-2">
                Bank
              </label>
            </div>
            <img src="/src/assets/banks.png" className="h-7 lg:mr-24" />
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="cod"
              {...register("paymentMethod")}
              value="Cash on delivery"
              className="appearance-none w-6 h-6 mr-2 border-[1.5px] border-black checked:bg-black checked:ring-transparent focus:ring-0"
              defaultChecked
            />
            <label htmlFor="cod" className="ml-2">
              Cash on delivery
            </label>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 py-4">
          <input
            type="text"
            placeholder="Coupon Code"
            {...register("couponCode")}
            className="flex-1 p-4 border-[1.5px] rounded"
          />
          <button className="bg-red-500 text-white px-10 py-4 rounded">
            Apply Coupon
          </button>
        </div>

        <button
          onClick={handleSubmit(onSubmit)}
          className="bg-red-500 text-white px-10 py-4 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
