import axios from "axios";

const GETTING_RECIPES = "GET_RECIPES";
const RECIPES_RECEIVED = "RECIPES_RECEIVED";
export const ERROR = "ERROR";

const rootURL = "http://localhost:5000/";

export const getRecipes = () => {
  return dispatch => {
    dispatch({ type: GETTING_RECIPES });
    axios
      .get(rootURL)
      .then(({ data }) => {
        dispatch({ type: RECIPES_RECEIVED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
