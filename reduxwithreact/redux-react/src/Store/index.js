import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialcounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialcounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

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

const store = configureStore({
  reducer: { counter: counterSlice.reducer, Auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const AuthAction = authSlice.actions;

export default store;
