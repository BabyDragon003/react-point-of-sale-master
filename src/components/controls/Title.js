import React, { Fragment } from "react";
import Divider from "material-ui/Divider";
import { withStyles } from "material-ui";

// eslint-disable-next-line
const styles = theme => ({
  title: {
    color: "#000000a3",
    lineHeight: 1.1,
    margin: 0,
      <div className={classes.title}>{title}</div>
      <Divider />
    </Fragment>
  );
}

export default withStyles(styles, { withTheme: true })(Title);
