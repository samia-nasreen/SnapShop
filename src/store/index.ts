import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import wishlistReducer from "./wishlist";
import cartReducer from "./cart";
import ordersReducer from "./orders";
import { productsApi } from "../api/productsApi";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    auth: authReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    orders: ordersReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type { RootState, AppDispatch };
export default store;
