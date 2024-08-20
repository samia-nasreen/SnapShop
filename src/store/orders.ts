import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Order {
  id: number;
  productId: number;
  quantity: number;
  totalPrice: number;
}

export interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    placeOrder(state, action: PayloadAction<Order>) {
      state.orders.push(action.payload);
    },
  },
});

export const ordersActions = ordersSlice.actions;
export default ordersSlice.reducer;
