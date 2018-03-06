import React, { Component } from "react";
import { connect } from "react-redux";
import { getRecipes } from "../../store/actions";
import "./App.css";

// components
import TopNav from "../TopNav/TopNav";
import RecipeCard from "../RecipeCard/RecipeCard";

// material-ui

class App extends Component {
  componentDidMount() {
    this.props.getRecipes();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TopNav />
        <RecipeCard recipes={this.props.recipes} />
      </div>
    );
  }
}

App.defaultProps = {
  recipes: []
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(mapStateToProps, { getRecipes })(App);
