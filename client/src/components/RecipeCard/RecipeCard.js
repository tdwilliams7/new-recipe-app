import React, { PureComponent } from "react";

class RecipeCard extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.recipes.map((recipe, i) => {
      return <h1 key={i}>{recipe.title}</h1>;
    });
  }
}

export default RecipeCard;
