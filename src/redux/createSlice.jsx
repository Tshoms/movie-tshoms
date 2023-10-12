import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesItems: [],
  //   moviesFilter: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,

  reducers: {
    getMoviesState: (state, action) => {
      state.moviesItems = action.payload;
      console.log("movies from dispatch:", state.moviesItems);
    },
    removeMovie: (state, action) => {
      const id = action.payload;
      console.log("valeur de id :", id);
      state.moviesItems = state.moviesItems.filter((item) => item.id !== id);
    },
  },
});

export const { getMoviesState, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
