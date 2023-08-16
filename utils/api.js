import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API;

export const fetchMovies = async (page = 1) => {
  const response = await axios.get(
    `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
  );
  return response.data;
};
