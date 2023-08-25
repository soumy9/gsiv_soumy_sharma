import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getMovieDetails,
  getMoviesList,
  searchMovie,
} from './thunks/moviesThunk';

const initialState = {
  moviesList: [],
  page: 0,
  movieDetails: {},
  isSearch: false,
  searchQuery: '',
  isResultEnd: false,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    resetPage: (state) => {
      // state.page = initialState.page;
      // state.isSearch = initialState.isSearch;
      // state.moviesList = initialState.moviesList;
      // state.isResultEnd = initialState.isResultEnd;
      return initialState;
    },
    setSearch: (state, action) => {
      state.isSearch = action.payload.isSearch;
      state.searchQuery = action.payload.searchQuery;
      state.page = initialState.page + 1;
      state.moviesList = initialState.moviesList;
      state.isResultEnd = initialState.isResultEnd;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.movieDetails = action.payload.movieDetails;
      })
      .addMatcher(
        isAnyOf(getMoviesList.fulfilled, searchMovie.fulfilled),
        (state, action) => {
          const list = action.payload.moviesList.results;
          if (list.length === 0) {
            state.isResultEnd = true;
          }
          state.moviesList = [...state.moviesList, ...list];
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(searchMovie.pending, getMoviesList.pending),
        (state) => {
          state.isLoading = true;
        }
      );
  },
});

// Action creators are generated for each case reducer function
export const { nextPage, resetPage, setSearch } = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
