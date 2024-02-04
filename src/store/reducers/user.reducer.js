import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    id: "udemy",
  },

  reducers: {
    toggleLogin(state, action) {
      state.isLoggedIn = !state.isLoggedIn;
    },
    updateUserId(state, action) {
      const newId = action.payload;
      if (state.isLoggedIn === true) {
        state.id = newId;
      }
    },
  },
});

export default userSlice.reducer;
export const { toggleLogin, updateUserId } = userSlice.actions;
