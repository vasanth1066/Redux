import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthentication: false };
const authSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthentication = true;
    },
    logout(state) {
      state.isAuthentication = false;
    },
  },
});
export const AuthAction = authSlice.actions;

export default authSlice;
