import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Guest",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state) => {
      return (state.value = "User");
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
