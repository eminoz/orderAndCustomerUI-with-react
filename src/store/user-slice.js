import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    responseUser: null,
    isAuth: false,
    token: null,
    fetchedOrders: null,
  },

  reducers: {
    fetchUserFromLocal(state) {
      var userFromlocal = localStorage.getItem("token");
      const localUser = JSON.parse(userFromlocal);
      if (localUser) {
        state.token = localUser;
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
      // state.isAuth = true;
    },
    login(state, action) {
      state.token = action.payload.token;
      state.isAuth = true;
    },
    logout(state) {
      localStorage.clear();
      state.responseUser = null;
      state.isAuth = false;
      state.fetchedOrders = null;
    },
    fetchedUserFromDB(state, action) {
      console.log(action.payload);
      state.fetchedOrders = {
        id: action.payload.orders.id,
        amount: action.payload.orders.amount,
        products: action.payload.orders.product,
      };
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
