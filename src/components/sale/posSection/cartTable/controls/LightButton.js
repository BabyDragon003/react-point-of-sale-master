import React from "react";
import { Button } from "material-ui";

const LightButton = ({ text, onClick }) => (
  <Button style={{ textTransform: "none", padding: 0 }} onClick={onClick}>
      }}
    >
      {text}
    </p>
  </Button>
);

export default LightButton;
