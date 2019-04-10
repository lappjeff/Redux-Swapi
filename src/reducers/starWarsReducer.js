import
{
  FETCH_PEOPLE_START,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAIL
} from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_START:

      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_PEOPLE_SUCCESS:

      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: ''
      }
    default:
      return state;
  }
};
