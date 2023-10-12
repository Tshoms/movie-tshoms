import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesItems: [],
  moviesFilter: [],
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
    getFilter: (state, action) => {
      const category = action.payload;
      console.log("valeur de category :", category);
      switch (category) {
        case "nothing":
          window.location.reload();
          break;
        case "Thriller":
          state.moviesItems = state.moviesItems.filter(
            (item) => item.category === category
          );
          break;
        case "Drame":
          state.moviesItems = state.moviesItems.filter(
            (item) => item.category === category
          );
          break;
        case "Animation":
          state.moviesItems = state.moviesItems.filter(
            (item) => item.category === category
          );
          break;
        case "Comedy":
          state.moviesItems = state.moviesItems.filter(
            (item) => item.category === category
          );
          break;

        default:
          break;
      }
    },
  },
});

export const { getMoviesState, removeMovie, getFilter } = movieSlice.actions;
export default movieSlice.reducer;
