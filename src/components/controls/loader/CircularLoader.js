import React from "react";
import { CircularProgress } from "material-ui/Progress";
import { withStyles } from "material-ui/styles";
import Overlay from "../Overlay";

const styles = () => ({
  loader: {
    position: "absolute",
    left: "50%",
    top: "25vh",
          style={props.style}
        />
        <Overlay />
      </div>
    );
  }

  return null;
};

export default withStyles(styles)(CircularLoader);
