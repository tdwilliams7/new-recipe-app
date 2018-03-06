import React, { PureComponent } from "react";

// material-ui
import { Card, CardActions, CardHeader, CardMedia } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

class RecipeCard extends PureComponent {
  render() {
    return this.props.recipes.map((recipe, i) => {
      return (
        <Card key={i}>
          <CardHeader title={recipe.title} />
          <CardMedia>
            <img src={recipe.thumbnail} alt={recipe.title} />
          </CardMedia>
          <CardActions>
            <FlatButton href={recipe.href} label="Check it out" />
          </CardActions>
        </Card>
      );
    });
  }
}

export default RecipeCard;
