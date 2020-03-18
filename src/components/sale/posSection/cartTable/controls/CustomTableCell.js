import { TableCell } from "material-ui";
import { withStyles } from "material-ui/styles";

const CustomTableCell = withStyles(theme => ({
  head: {
    fontSize: 13,
    padding: "5px",
    overflowWrap: "break-word"
  }
}))(TableCell);

export default CustomTableCell;
