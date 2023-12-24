import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cryptosApi } from "../services/cryptosApi";

const reducer = combineReducers({
  [cryptosApi.reducerPath]: cryptosApi.reducer,
  // Add other reducers as needed
});

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptosApi.middleware),
});
