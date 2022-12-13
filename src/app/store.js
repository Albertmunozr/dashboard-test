import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "../features/services/tableUsers";
import { currencyApi } from "../features/services/currencyChart";
import { weatherApi } from "../features/services/weatherChart";
import { exchangeApi } from "../features/services/exchangeChart";

export const store = configureStore({
  reducer: {
    user: userReducer,

    [usersApi.reducerPath]: usersApi.reducer,
    [currencyApi.reducerPath]: currencyApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [exchangeApi.reducerPath]: exchangeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      usersApi.middleware,
      currencyApi.middleware,
      weatherApi.middleware,
      exchangeApi.middleware,
    ]),
});

setupListeners(store.dispatch);
