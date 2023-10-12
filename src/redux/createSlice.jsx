import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesItems: [],
  moviesFilter: "",
};

const updateLocalStorage = (newItemArray) => {
  localStorage.setItem("moviesData", JSON.stringify(newItemArray));
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,

  reducers: {
    getLocalStorageData: (state) => {
      state.cartItems = JSON.parse(localStorage.getItem("moviesData"));
    },

    getMoviesState: (state, action) => {
      state.moviesItems = action.payload;
      console.log("movies from dispatch:", state.moviesItems);
    },
    getMoviesFilter: (state, action) => {
      state.moviesFilter = action.payload;
      console.log("movies after filter from dispatch :", state.moviesFilter);
      switch (state.moviesFilter) {
        case "nothing":
          window.location.reload();
          break;
        case "Thriller":
          state.moviesItems = state.moviesItems.filter(
            (item) => item.category === state.moviesFilter
          );
          break;
        case "Drame":
          state.moviesItems = state.moviesItems.filter(
            (item) => item.category === state.moviesFilter
          );
          break;
        case "Animation":
          state.moviesItems = state.moviesItems.filter(
            (item) => item.category === state.moviesFilter
          );
          break;
        case "Comedy":
          state.moviesItems = state.moviesItems.filter(
            (item) => item.category === state.moviesFilter
          );
          break;

        default:
          break;
      }
    },
    removeMovie: (state, action) => {
      const id = action.payload;
      console.log("valeur de id :", id);
      state.moviesItems = state.moviesItems.filter((item) => item.id !== id);
    },
  },
});

export const {
  getLocalStorageData,
  getMoviesState,
  getMoviesFilter,
  removeMovie,
} = movieSlice.actions;
export default movieSlice.reducer;
