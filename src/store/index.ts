import { configureStore, createSlice } from "@reduxjs/toolkit";
import authReducer from "./auth";
import wishlistReducer from "./wishlist";
import cartReducer from "./cart";
import ordersReducer from "./orders";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    auth: authReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    orders: ordersReducer,
  },
});

export type { RootState, AppDispatch };
export default store;
