import { createSlice } from '@reduxjs/toolkit';
import { getMoviesList } from './thunks/moviesThunk';

const initialState = {
  moviesList: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMoviesList.fulfilled, (state, action) => {
      state.moviesList = action.payload.moviesList;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
