import { createAsyncThunk } from '@reduxjs/toolkit';

const api = 'https://api.themoviedb.org/3';
const apiKey = '8d00b483587b8d5ce4a288e827802e49';

// https://api.themoviedb.org/3/discover/movie?api_key=8d00b483587b8d5ce4a288e827802e49&page=2
//https://api.themoviedb.org/3/movie/550?api_key=8d00b483587b8d5ce4a288e827802e49

export const getMoviesList = createAsyncThunk(
  'movies/list',
  async (_, thunkAPI) => {
    const { page } = thunkAPI.getState();
    const moviesList = await (
      await fetch(`${api}/discover/movie?api_key=${apiKey}&page=${page}`)
    ).json();
    return Promise.resolve({ moviesList });
  }
);

export const getMovieDetails = createAsyncThunk(
  'movie/details',
  async ({ id }) => {
    if (!id) {
      id = 550;
    }
    const movieDetails = await (
      await fetch(`${api}/movie/${id}?api_key=${apiKey}`)
    ).json();
    return Promise.resolve({ movieDetails });
  }
);
// https://api.themoviedb.org/3/search/movie?query=fight%20club&include_adult=false&language=en-US&page=1

export const searchMovie = createAsyncThunk(
  'movie/search',
  async ({ query }, thunkAPI) => {
    const { page } = thunkAPI.getState();

    const moviesList = await (
      await fetch(
        `${api}/search/movie?api_key=${apiKey}&query=${query}&include_adult=false&language=en-US&page=${page}`
      )
    ).json();
    return Promise.resolve({ moviesList });
  }
);
