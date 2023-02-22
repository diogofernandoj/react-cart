import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const alreadyInCart = state.products.some((item) => item.id == action.payload.id);

      if (alreadyInCart) {
        state.products = state.products.map((item) => (item.id == action.payload.id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    decrementProductQuantity: (state, action) => {
      state.products = state.products.map((item) =>
        item.id == action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );
    },
    incrementProductQuantity: (state, action) => {
      state.products = state.products.map((item) => (item.id == action.payload ? { ...item, quantity: item.quantity + 1 } : item));
    },
    removeProductFromCart: (state, action) => {
      state.products = state.products.filter((item) => item.id != action.payload);
    },
  },
});

export const { addProductToCart, decrementProductQuantity, incrementProductQuantity, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
