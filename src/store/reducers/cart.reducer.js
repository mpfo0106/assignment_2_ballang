import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    goods: [],
  },
  reducers: {
    addCart(state, action) {
      state.goods.push(action.payload);
    },
    removeCart: (state, action) => {
      const index = state.goods.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.goods.splice(index, 1);
      }
    },
  },
});
export const { addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;

// export const ADD_ITEM = "cart/addItem";
// export const REMOVE_ITEM = "cart/removeItem";

// const initialState = {
//   goods: [],
// };

// export default function cartReducer(state = initialState, action) {
//   const newState = { ...state };

//   if (action.type === ADD_ITEM) {
//     const newItem = action.payload;
//     const newGoods = [...state.goods, newItem];

//     newState.goods = newGoods;
//   } else if (action.type === REMOVE_ITEM) {
//     const itemIdToRemove = action.payload;
//     const newGoods = state.goods.filter((item) => item.id !== itemIdToRemove);

//     newState.goods = newGoods;
//   }

//   return newState;
// }

// export const addItemActionCreator = (payload) => ({
//   type: ADD_ITEM,
//   payload,
// });
// export const removeItemActionCreator = (payload) => ({
//   type: REMOVE_ITEM,
//   payload,
// });
