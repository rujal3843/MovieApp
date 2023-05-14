import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./movie_api";




export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,

  },
  middleware: (getDefault) => getDefault().concat([
    movieApi.middleware
  ])
})