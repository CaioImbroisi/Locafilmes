import axios from 'axios';
interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Plot: string;
  Metascore: string;
  Actors: string;
  Runtime: string;
  Genre: string;
}

interface SearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}
const searchMovies = async (text:string) => {
  const result = await axios.get<SearchResponse>(`https://www.omdbapi.com/?apikey=cf893766&s=${text}&type=movie`)
  return result.data.Search
}

const findMovieById = async (text:string) => {
  const result = await axios.get<Movie>(`https://www.omdbapi.com/?apikey=cf893766&i=${text}`)
  return result
}

export {searchMovies, findMovieById}