import React from "react";
import { withStyles } from "material-ui/styles";

const styles = () => ({
  root: {
  }
});

const Overlay = ({ classes }) => <div className={classes.root} />;

export default withStyles(styles)(Overlay);
