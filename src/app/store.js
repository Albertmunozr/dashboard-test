import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "../features/services/tableUsers";
import { currencyApi } from "../features/services/currencyChart";
import { weatherApi } from "../features/services/weatherChart";
import { vatApi } from "../features/services/vatChart";

export const store = configureStore({
  reducer: {
    user: userReducer,

    [usersApi.reducerPath]: usersApi.reducer,
    [currencyApi.reducerPath]: currencyApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [vatApi.reducerPath]: vatApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      usersApi.middleware,
      currencyApi.middleware,
      weatherApi.middleware,
      vatApi.middleware,
    ]),
});

setupListeners(store.dispatch);
