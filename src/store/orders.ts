import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../types/cartItem';

export interface Order {
  id: number;
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  createdAt: string;
}

export interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: [],
};

let orderIdCounter = 1;

const ordersSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    placeOrder(state, action: PayloadAction<Omit<Order, 'id'>>) {
      const newOrder: Order = {
        ...action.payload,
        id: orderIdCounter++,
        createdAt: new Date().toISOString(),
      };
      state.orders.push(newOrder);
    },
  },
});

export const ordersActions = ordersSlice.actions;
export default ordersSlice.reducer;
