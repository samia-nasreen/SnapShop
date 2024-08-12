import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === newProduct.id
      );
      if (existingProduct) {
        existingProduct.quantity += newProduct.quantity;
        existingProduct.totalPrice += newProduct.price * newProduct.quantity;
      } else {
        state.items.push({
          ...newProduct,
          quantity: newProduct.quantity,
          totalPrice: newProduct.price * newProduct.quantity,
        });
      }
      state.totalQuantity += newProduct.quantity;
      state.totalAmount += newProduct.price * newProduct.quantity;
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      const existingProduct = state.items.find((item) => item.id === productId);
      if (existingProduct) {
        state.totalQuantity -= existingProduct.quantity;
        state.totalAmount -= existingProduct.totalPrice;
        state.items = state.items.filter((item) => item.id !== productId);
      }
    },
    increaseQuantity(state, action) {
      const productId = action.payload;
      const existingProduct = state.items.find((item) => item.id === productId);
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice += existingProduct.price;
        state.totalQuantity += 1;
        state.totalAmount += existingProduct.price;
      }
    },
    decreaseQuantity(state, action) {
      const productId = action.payload;
      const existingProduct = state.items.find((item) => item.id === productId);
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
        existingProduct.totalPrice -= existingProduct.price;
        state.totalQuantity -= 1;
        state.totalAmount -= existingProduct.price;
      } else if (existingProduct && existingProduct.quantity === 1) {
        state.totalQuantity -= 1;
        state.totalAmount -= existingProduct.price;
        state.items = state.items.filter((item) => item.id !== productId);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
