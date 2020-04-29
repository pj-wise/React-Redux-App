import axios from "axios";

export const FETCHING_DOG_START = "FETCHING_DOG_START";
export const FETCHING_DOG_SUCCESS = "FETCHING_DOG_SUCCESS";
export const FETCHING_DOG_FAILURE = "FETCHING_DOG_FAILURE";
export const getDoggo = () => dispatch => {
  dispatch({ type: FETCHING_DOG_START });
  axios
    .get(`https://dog.ceo/api/breed/husky/images/random`)
    .then(res => {
      dispatch({ type: FETCHING_DOG_SUCCESS, payload: res.data.message });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_DOG_FAILURE,
        code: console.log("YOU BROKE IT", err)
      });
    });
};
