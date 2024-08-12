import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import wishlistReducer from "./wishlist";
import cartReducer from "./cart";
import ordersReducer from "./orders";

const store = configureStore({
  reducer: {
    auth: authReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    orders: ordersReducer,
  },
});

export default store;
