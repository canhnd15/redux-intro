import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlide";
import customerReducer from "./features/customers/customerSlide";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
