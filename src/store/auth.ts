import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isAuthenticated: boolean;
  userId: number | null;
}

export interface LoginPayload {
  userId: number;
}

const initialAuthState: AuthState = { isAuthenticated: false, userId: null };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.isAuthenticated = true;
      state.userId = action.payload.userId;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userId = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
