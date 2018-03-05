import { GETTING_RECIPES, RECIPES_RECEIVED, ERROR } from "../actions";

const initialState = {
  recipes: [],
  fetchingRecipes: false,
  error: null
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_RECIPES:
      return { ...state, action.payload}
    default:
      return state
  }
}
