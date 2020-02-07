import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";

// eslint-disable-next-line
const styles = theme => ({
  listItem: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      "& $primary, & $icon": {
        color: theme.palette.common.white
      }
    }
  },

  getClassName = () => {
    const { isSelected, classes } = this.props;

    if (isSelected) return classNames(classes.listItem, classes.selected);

    return classNames(classes.listItem, classes.normal);
  };

  render() {
    const { classes } = this.props;

    return (
      <ListItem
        button
        dense
        onClick={this.props.onClick}
        className={this.getClassName()}
      >
        <ListItemIcon className={classes.icon}>{this.props.icon}</ListItemIcon>
        <ListItemText
          style={{ padding: 2 }}
          classes={{ primary: classes.primary }}
          primary={this.props.text}
        />
      </ListItem>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SidebarMenu);
