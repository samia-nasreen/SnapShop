import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import wishlistReducer from "./wishlist";
import cartReducer from "./cart";
import ordersReducer from "./orders";
import { productsApi } from "../api/productsApi";
import { authApi } from "../api/authApi";
import { usersApi } from "../api/usersApi";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    auth: authReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    orders: ordersReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(productsApi.middleware)
      .concat(usersApi.middleware),
});

export type { RootState, AppDispatch };
export default store;
