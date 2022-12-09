import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "../features/services/tableUsers";
import { currencyApi } from "../features/services/currencyChart";

export const store = configureStore({
  reducer: {
    user: userReducer,

    [usersApi.reducerPath]: usersApi.reducer,
    [currencyApi.reducerPath]: currencyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      usersApi.middleware,
      currencyApi.middleware,
    ]),
});

setupListeners(store.dispatch);
