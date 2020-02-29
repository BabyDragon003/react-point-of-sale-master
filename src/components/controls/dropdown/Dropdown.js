import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import "react-select/dist/react-select.css";
import CustomTextField from "../textfields/CustomTextField";
import SelectWrapped from "./SelectWrapped";
import styles from "./styles";

const Dropdown = props => {
  const { classes, datasource, ...rest } = props;

  return (
    <CustomTextField
      {...rest}
      fullWidth
      // value={this.state.selectedValue}
      // onChange={this.handleChange}
      name="react-select-chip-label"
      InputLabelProps={{
        shrink: true
