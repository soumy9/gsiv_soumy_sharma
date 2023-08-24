import { createSlice } from '@reduxjs/toolkit';
import { getMovieDetails, getMoviesDetails, getMoviesList } from './thunks/moviesThunk';

const initialState = {
  moviesList: [],
  page: 1,
  movieDetails:{},
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload.page;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesList.fulfilled, (state, action) => {
        state.moviesList = action.payload.moviesList;
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.movieDetails = action.payload.movieDetails;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
