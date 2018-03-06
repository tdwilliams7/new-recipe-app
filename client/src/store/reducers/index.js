import { GETTING_RECIPES, RECIPES_RECEIVED, ERROR } from "../actions";

const initialState = {
  recipes: [],
  fetchingRecipes: false,
  error: null
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_RECIPES:
      return { ...state, fetchingRecipes: true };
    case RECIPES_RECEIVED:
      return { ...state, fetchingRecipes: false, recipes: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
