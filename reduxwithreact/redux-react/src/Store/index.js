import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthStore";
import counterSlice from "./CounterStore";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, Auth: authSlice.reducer },
});

export default store;
