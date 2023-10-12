import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./createSlice";

export default configureStore({
  reducer: {
    moviesItems: movieSlice,
  },
});
