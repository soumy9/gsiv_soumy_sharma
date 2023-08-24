import { createAsyncThunk } from '@reduxjs/toolkit';

export const getMoviesList = createAsyncThunk('movies/list', async () => {
  const moviesList = await (await fetch('http://api.themoviedb.org/3/discover/movie?api_key=7f46651666f1ca68e4cf0cb150551f07')).json();
  return Promise.resolve({moviesList});
});
