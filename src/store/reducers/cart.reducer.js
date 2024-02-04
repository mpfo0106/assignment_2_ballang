export const ADD_ITEM = "cart/addItem";
export const REMOVE_ITEM = "cart/removeItem";

const initialState = {
  goods: [],
};

export default function cartReducer(state = initialState, action) {
  const newState = { ...state };

  if (action.type === ADD_ITEM) {
    const newItem = action.payload;
    const newGoods = [...state.goods, newItem];

    newState.goods = newGoods;
  } else if (action.type === REMOVE_ITEM) {
    const itemIdToRemove = action.payload;
    const newGoods = state.goods.filter((item) => item.id !== itemIdToRemove);

    newState.goods = newGoods;
  }

  return newState;
}

export const addItemActionCreator = (payload) => ({
  type: ADD_ITEM,
  payload,
});
export const removeItemActionCreator = (payload) => ({
  type: REMOVE_ITEM,
  payload,
});
