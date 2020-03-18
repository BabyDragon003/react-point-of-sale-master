import React from "react";
import { withStyles } from "material-ui/styles";
import Dialog from "material-ui/Dialog";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
    position: "relative"
  },
  title: {
    flex: 1,
    paddingLeft: "5px",
    fontWeight: 100,
    fontSize: "20px"
  },
  subTitle: {
    paddingLeft: "10px",
    fontWeight: 100,
    fontSize: "16px"
  }
};

const Transition = props => <Slide direction="up" {...props} />;

const FullPageDialog = ({ classes, open, handleClose, children, title }) => (
  <Dialog
    fullScreen
    open={open}
    onClose={handleClose}
    TransitionComponent={Transition}
  >
    <AppBar className={classes.appBar}>
      <Toolbar>
        <span variant="title" color="inherit" className={classes.title}>
          {title}
        </span>
        <IconButton color="inherit" onClick={handleClose} aria-label="Close">
          <CloseIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    {children}
  </Dialog>
);

export default withStyles(styles)(FullPageDialog);
