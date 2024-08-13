import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLink } from "react-router-dom";

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

      {isCartEmpty && (
        <div className="text-center">
          <h3 className="text-xl">Your cart is empty</h3>
        </div>
      )}

      <div className="flex flex-col justify-between">
        <div className="w-full">
          {!isCartEmpty && (
            <div className="p-4 sm:p-6 rounded shadow-[0px_0px_8px_2px_rgba(0,0,0,0.03)] mb-8">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                <div className="text-left ml-4 md:ml-10">Product</div>
                <div className="text-center">Price</div>
                <div className="text-center">Quantity</div>
                <div className="hidden md:block text-right mr-4 md:mr-10">
                  Subtotal
                </div>
              </div>
            </div>
          )}

          <div className="space-y-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded shadow-[0px_0px_8px_2px_rgba(0,0,0,0.03)] p-4 sm:p-6 grid grid-cols-3 md:grid-cols-4"
              >
                <div className="flex items-center ml-4 md:ml-10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 mr-2 sm:mr-6"
                  />
                  <span className="text-xs sm:text-base">{item.name}</span>
                </div>
                <div className="flex items-center justify-center">
                  ${formatCurrency(item.price)}
                </div>
                <div className="flex items-center justify-center">
                  <div className="border-[1.5px] border-gray-400 shadow overflow-hidden flex items-center py-1 sm:py-2 px-1 rounded-md">
                    <span className="text-center px-2 sm:px-4">
                      {item.quantity}
                    </span>
                    <div className="flex flex-col">
                      <button
                        className="px-1 sm:px-2 py-0.5 hover:bg-gray-300 text-xs"
                        onClick={() => increaseQuantityHandler(item.id)}
                      >
                        <IoIosArrowUp />
                      </button>
                      <button
                        className="px-1 sm:px-2 py-0.5 hover:bg-gray-300 text-xs"
                        onClick={() => decreaseQuantityHandler(item.id)}
                      >
                        <IoIosArrowDown />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-end mr-4 md:mr-10">
                  ${formatCurrency(item.totalPrice)}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between mt-8">
            <NavLink
              to="/"
              className="bg-white border border-gray-600 text-center text-gray-900 font-medium px-6 sm:px-8 py-3 rounded mb-4 sm:mb-0"
            >
              Return To Shop
            </NavLink>
            <button className="bg-white border border-gray-600 text-gray-900 font-medium px-6 sm:px-8 py-3 rounded">
              Update Cart
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start mt-20">
          <div className="w-full md:w-1/2 flex flex-col justify-center md:pr-4 mb-4 md:mb-0">
            <div className="flex w-full sm:w-6/7">
              <input
                type="text"
                placeholder="Coupon Code"
                className="p-2 sm:p-4 text-sm border-[1.5px] border-gray-600 rounded w-2/3 sm:w-3/5"
              />
              <button className="bg-red-500 text-white px-6 sm:px-10 py-2 sm:py-4 text-sm rounded ml-4">
                Apply Coupon
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-end">
            <div className="border-[1.5px] border-gray-700 px-4 sm:px-6 py-6 sm:py-8 rounded shadow-md w-full sm:w-5/6">
              <h2 className="text-lg sm:text-xl font-medium mb-6 sm:mb-8">
                Cart Total
              </h2>
              <div className="flex justify-between mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-gray-400">
                <span>Subtotal:</span>
                <span>${formatCurrency(totalAmount)}</span>
              </div>
              <div className="flex justify-between mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-gray-400">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-base sm:text-lg">
                <span>Total:</span>
                <span>${formatCurrency(totalAmount)}</span>
              </div>
              <div className="flex justify-center">
                <NavLink
                  to="/checkout"
                  className={`px-6 sm:px-8 py-3 mt-6 rounded ${
                    isCartEmpty
                      ? "bg-gray-500 text-white opacity-50 cursor-not-allowed pointer-events-none"
                      : "bg-red-500 text-white hover:bg-red-600"
                  }`}
                >
                  Proceed to Checkout
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
