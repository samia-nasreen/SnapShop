import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/product";

interface WishlistState {
  items: Product[];
}

const initialWishlistState: WishlistState = { items: [] };

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialWishlistState,
  reducers: {
    addToWishlist(state, action: PayloadAction<Product>) {
      const newProduct = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === newProduct.id
      );
      if (!existingProduct) {
        state.items.push(newProduct);
      }
    },
    removeFromWishlist(state, action: PayloadAction<number>) {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
    },
    clearWishlist(state) {
      state.items = [];
    },
  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice.reducer;
