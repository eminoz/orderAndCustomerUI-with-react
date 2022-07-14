import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, responseUser: null },
  reducers: {
    createuser(state, action) {},
  },
});

export const userActions = userSlice.actions;
export default userSlice;
