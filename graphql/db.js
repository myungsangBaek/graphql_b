import axios from "axios";

const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = async (limit, rating) => {
  try {
    let REQUEST_URL = API_URL;
    if (limit > 0) {
      REQUEST_URL += `limit=${limit}`;
    } else if (rating > 0) {
      REQUEST_URL += `&minimum_rating=${rating}`;
    }
    const getData = await axios.get(REQUEST_URL);
    return getData.data.data.movies;
  } catch (err) {
    console.log(err);
  }
};

export const getMovie = async () => {
  try {
    let REQUEST_URL = API_URL;
    const getData = await axios.get(REQUEST_URL);
    console.log(getData);
    return getData.data.data.movies;
  } catch (err) {
    console.log(err);
  }
};

export const getSuggestions = async (id) => {
  let REQUEST_URL = API_URL;
  const {
    data: {
      data: { movies },
    },
  } = await axios(REQUEST_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};
