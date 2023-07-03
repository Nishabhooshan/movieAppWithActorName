import axios from 'axios';

const API_KEY = 'b9ce412e470685c0155cc41e07127eed';

const movieService = {
  searchMoviesByActor: async (actorName) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${actorName}`
      );

      const actorId = response.data.results[0].id;

      const moviesResponse = await axios.get(
        `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${API_KEY}`
      );

      const movies = moviesResponse.data.cast;
      return movies;
    } catch (error) {
      throw new Error('Failed to fetch movies');
    }
  },
};

export default movieService;
