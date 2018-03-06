import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getRecipes } from "../../store/actions";

// material-ui
import AppBar from "material-ui/AppBar";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

class TopNav extends PureComponent {
  state = {
    value: null
  };

  handleChange = (event, index, value) => {
    this.setState({ value });
    console.log(event.target.textContent);
    const query = event.target.textContent;
    this.props.getRecipes(query);
  };

  render() {
    return (
      <AppBar
        title="Food Stuff"
        showMenuIconButton={false}
        iconElementRight={
          <SelectField
            floatingLabelText="Meat"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="Chicken" />
            <MenuItem value={2} primaryText="Beef" />
            <MenuItem value={3} primaryText="Pork" />
            <MenuItem value={4} primaryText="Fish" />
            <MenuItem value={5} primaryText="Eggs" />
            <MenuItem value={6} primaryText="None" />
          </SelectField>
        }
      />
    );
  }
}

export default connect(null, { getRecipes })(TopNav);
