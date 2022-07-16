import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.quantity -= 1;
      state.products.splice(action.payload, 1);
    },
    deleteOrder: (state) => {
      state.quantity = 0;
      state.total = 0;
      state.products.splice(0, state.products.length);
    },
  },
});

export const { addProduct, deleteOrder, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
