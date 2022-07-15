import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, responseUser: null, isAuth: false },

  reducers: {
    fetchUserFromLocal(state) {
      var userFromlocal = localStorage.getItem("user");
      const localUser = JSON.parse(userFromlocal);

      if (localUser) {
        state.responseUser = {
          id: localUser.id,
          name: localUser.name,
          surname: localUser.surname,
          mail: localUser.email,
        };
        state.isAuth = true;
      }
      console.log("local is bos");
      return;
    },
    createdUser(state, action) {
      state.responseUser = {
        id: action.payload.id,
        name: action.payload.name,
        surname: action.payload.surname,
        email: action.payload.email,
      };
      state.isAuth = true;
    },
    logout(state) {
      localStorage.clear();
      state.responseUser = null;
      state.isAuth = false;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
