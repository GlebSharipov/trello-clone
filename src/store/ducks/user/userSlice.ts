import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
  },
});

export const { addUserName } = userSlice.actions;

export default userSlice.reducer;
