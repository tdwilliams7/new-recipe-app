import { GETTING_RECIPES, RECIPES_RECEIVED, ERROR } from "../reducers";

const initialState = {
  recipes: [],
  fetchingRecipes: false,
  error: null
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_RECIPES:
      return { ...state, action.payload}
    default:
      return state
  }
}
