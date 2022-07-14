import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, responseUser: null, isAuth: false },

  reducers: {
    fetchUserFromLocal(state) {
      const localUser = JSON.parse(localStorage.getItem("user"));
console.log(localUser)
      if (localUser.name) {
        state.responseUser = {
          id: localUser.id,
          name: localUser.name,
          surname: localUser.surname,
          mail: localUser.email,
        };
        state.isAuth = true;
      }
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
  },
});

export const userActions = userSlice.actions;
export default userSlice;
