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
      state.moviesItems = state.moviesItems.map((item) => item.id !== id);
    },
    // getFilter: (state, action) => {
    //   const category = action.payload;
    //   state.moviesItems = state.moviesItems.map(
    //     (item) => item.category === category
    //   );
    // },
  },
});

export const { getMoviesState, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
