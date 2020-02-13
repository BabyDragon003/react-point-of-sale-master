import React, { Component } from "react";
import { MenuItem } from "material-ui/Menu";

class Option extends Component {
  handleClick = event => {
    this.props.onSelect(this.props.option, event);
  };

  render() {
    const { children, isFocused, isSelected, onFocus } = this.props;
        {children}
      </MenuItem>
    );
  }
}

export default Option;
