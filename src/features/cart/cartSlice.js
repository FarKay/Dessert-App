import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cart: [
  //   {
  //     name: "classic tiramisu",
  //     quantity: 1,
  //     price: 5.5,
  //     totalPrice: 5.5,
  //     image: "./assets/images/image-tiramisu-desktop.jpg",
  //   },
  // ],

  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push({ ...action.payload, quantity: 1 });
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.name !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.name === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.name === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.price;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((cur, acc) => cur + acc.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((cur, acc) => cur + acc.totalPrice, 0);

export const getCurrentQuantity = (name) => (state) =>
  state.cart.cart.find((item) => item.name === name)?.quantity ?? 0;

export default cartSlice.reducer;
