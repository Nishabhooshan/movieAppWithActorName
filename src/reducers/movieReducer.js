const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_MOVIES_ERROR':
      return {
        ...state,
        movies: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;


