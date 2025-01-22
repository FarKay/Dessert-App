import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
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
    addItem(
      state,
      action: PayloadAction<Omit<CartItem, "quantity" | "totalPrice">>
    ) {
      state.cart.push({
        ...action.payload,
        quantity: 1,
        totalPrice: action.payload.price,
      });
    },
    deleteItem(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter((item) => item.name !== action.payload);
    },
    increaseQuantity(state, action: PayloadAction<string>) {
      const item = state.cart.find((item) => item.name === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.price;
      }
    },
    decreaseQuantity(state, action: PayloadAction<string>) {
      const item = state.cart.find((item) => item.name === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.price;

        if (item.quantity === 0)
          cartSlice.caseReducers.deleteItem(state, action);
      }
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

export const getCart = (state: { cart: CartState }) => state.cart.cart;

export const getTotalCartQuantity = (state: { cart: CartState }) =>
  state.cart.cart.reduce((cur, acc) => cur + acc.quantity, 0);

export const getTotalCartPrice = (state: { cart: CartState }) =>
  state.cart.cart.reduce((cur, acc) => cur + acc.totalPrice, 0);

export const getCurrentQuantity =
  (name: string) => (state: { cart: CartState }) =>
    state.cart.cart.find((item) => item.name === name)?.quantity ?? 0;

export default cartSlice.reducer;
