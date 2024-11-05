import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore=configureStore({
  reducer:{        // there is difference in reducer and reducers
      cart:cartReducer,
  }
});

export default appStore;