import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import FirstPageIcon from "material-ui-icons/FirstPage";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import KeyboardArrowRight from "material-ui-icons/KeyboardArrowRight";
import LastPageIcon from "material-ui-icons/LastPage";

const styles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5
  }
});

class TablePaginationActions extends Component {
  render() {
    const {
      classes,
      count,
      page,
      rowsPerPage,
      onFirst,
      onPrev,
        >
          <KeyboardArrowRight />
        </IconButton>

        <IconButton
          onClick={onLast}
          disabled={page >= Math.ceil(count / rowsPerPage)}
          aria-label="Last Page"
        >
          <LastPageIcon />
        </IconButton>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TablePaginationActions);
