import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {
    placeOrder(state, action) {
      state.orders.push(action.payload);
    },
  },
});

export const ordersActions = ordersSlice.actions;

export default ordersSlice.reducer;
