import React, { Component } from "react";
import { MenuItem } from "material-ui/Menu";

class Option extends Component {
  handleClick = event => {
    return (
      <MenuItem
        onFocus={onFocus}
        selected={isFocused}
        onClick={this.handleClick}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400
        }}
      >
        {children}
      </MenuItem>
    );
  }
}

export default Option;
