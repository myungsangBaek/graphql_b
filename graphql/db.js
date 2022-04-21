let movies = [
  {
    id: 1,
    name: "Han",
    score: 12,
  },
  {
    id: 2,
    name: "Stark",
    score: 12,
  },
  {
    id: 3,
    name: "Robert",
    score: 12,
  },
  {
    id: 4,
    name: "Lil",
    score: 12,
  },
];

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const getMovies = () => movies;

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
