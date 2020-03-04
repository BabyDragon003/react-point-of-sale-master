import React, { Fragment } from "react";
import { withStyles } from "material-ui/styles";

const styles = () => ({
  price: {
  title: {
    fontSize: "13px"
  }
});

const FooterPriceLabel = ({ price, title, classes }) => (
  <Fragment>
    <span className={classes.title}>{title}</span>
    <span className={classes.price}>
      {price} {"₹"}
    </span>
  </Fragment>
);

export default withStyles(styles)(FooterPriceLabel);
