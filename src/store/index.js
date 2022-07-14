import { configureStore } from "@reduxjs/toolkit";
import  userActions  from "./user-slice";

const store = configureStore({
  reducer: { user: userActions.reducer },
});

export default store;
