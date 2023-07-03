import movieService from "../services/movieAPI";

export const fetchMovies = (actorName) => {
  return async (dispatch) => {
    try {
      const movies = await movieService.searchMoviesByActor(actorName);

      dispatch({
        type: 'FETCH_MOVIES_SUCCESS',
        payload: movies,
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_MOVIES_ERROR',
        payload: error.message,
      });
    }
  };
};
