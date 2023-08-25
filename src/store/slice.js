import { createSlice } from '@reduxjs/toolkit';
import { getMovieDetails, getMoviesList } from './thunks/moviesThunk';

const initialState = {
  moviesList: [],
  page: 0,
  movieDetails: {},
  isLoading: false,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesList.pending, (state, action) => {
        console.log('pending');
        state.isLoading = true;
      })
      .addCase(getMoviesList.fulfilled, (state, action) => {
        console.log(action.payload.moviesList);
        state.moviesList = [
          ...state.moviesList,
          ...action.payload.moviesList.results,
        ];
        state.isLoading = false;
        // state.moviesList = action.payload.moviesList.result;
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.movieDetails = action.payload.movieDetails;
      });
  },
});

// Action creators are generated for each case reducer function
export const { nextPage } = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
