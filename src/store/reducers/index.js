import { FETCHING_DOG_START, FETCHING_DOG_SUCCESS } from "../actions";

const initialState = {
  message: null,
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DOG_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCHING_DOG_SUCCESS:
      return {
        ...state,
        message: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
