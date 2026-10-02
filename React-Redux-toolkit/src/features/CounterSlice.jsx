import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "Counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increament: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});


export const {increament,decrement} = CounterSlice.actions;
export default CounterSlice.reducer;