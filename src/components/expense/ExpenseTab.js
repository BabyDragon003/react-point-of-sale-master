import React, { Component } from "react";
import * as moment from "moment";
import Button from "material-ui/Button";
import { withRouter } from "react-router";
import { withStyles } from "material-ui/styles";
import Searchbox from "../controls/Searchbox";
import api from "../../api";
import ApiAutoFetchDatagrid from "../controls/datagrid/ApiAutoFetchDatagrid";
import YesNo from "../controls/dialog/YesNo";
import CircularLoader from "../controls/loader/CircularLoader";
import Message from "../controls/Message";

const styles = theme => ({
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  wrapper: {
    marginTop: 20,
    position: "relative"
  }
});

class ExpenseTab extends Component {
  expenseColumns = ["ID", "Description", "Amount", "Spent At", "Type"];

  state = {
    clearSearch: false,
    serachQuery: "",
    showConfirmDeleteDialog: false,
    isLoading: false,
    message: "",
    showMessage: false,
    isError: false
  };

  onListClick = () => {
    this.setState({ clearSearch: true, serachQuery: "", showMessage: false });
  };

  onSearchSubmit = async id => {
    this.setState({ clearSearch: false, serachQuery: id });
  };

  onCreateNewClick = () => {
    this.props.history.push("expense/new");
  };

  onEdit = row => {
    this.props.history.push(`expense/edit/${row.id}`);
  };

  onDelete = itemToDelete => {
    this.setState({ showConfirmDeleteDialog: true, itemToDelete });
  };

  onConfirmDeleteClick = async () => {
    const { id } = this.state.itemToDelete;

    try {
      this.setState({ isLoading: true });

      const res = await api.expense.delete(id);

      if (res.status === 200) {
        this.showMessage("Deleted successfully.");
      } else {
        throw new Error(
          `Couldn't delete the record. The status code is ${res.status}`
        );
      }
    } catch (error) {
      this.showMessage(error.message, true);
    }
  };

  onMessageCloseClick = () => {
    this.setState({ showMessage: false });
  };

  onCancelConfirmDeleteClick = () => {
    this.setState({ showConfirmDeleteDialog: false });
  };

  showMessage = (message, isError = false) => {
    this.setState({
      showMessage: true,
      isError,
      message,
      isLoading: false,
      showConfirmDeleteDialog: false
    });
  };

  getApiPromise = () => {
    const { serachQuery } = this.state;

    if (serachQuery.length === 0) {
      return api.expense.fetchByPages();
    }

    return api.expense.searchByIdAndGetByPages(serachQuery);
  };

  render() {
    const {
      clearSearch,
      showConfirmDeleteDialog,
      isLoading,
      message,
      showMessage,
      isError
    } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <CircularLoader isLoading={isLoading} />
        <YesNo
          open={showConfirmDeleteDialog}
          message="Are you sure wan't to delete the selected item"
          onOk={this.onConfirmDeleteClick}
          onCancel={this.onCancelConfirmDeleteClick}
        />
        <div>
          <Button
            className={classes.button}
            variant="raised"
            color="default"
            size="small"
            onClick={this.onListClick}
          >
            List
          </Button>

          <Button
            className={classes.button}
            variant="raised"
            color="primary"
            size="small"
            onClick={this.onCreateNewClick}
          >
            Create New
          </Button>
          <Searchbox
            clear={clearSearch}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          />
        </div>

        <Message
          style={{ width: "98%" }}
          title="Message"
          message={message}
          show={showMessage}
          isError={isError}
          onCloseClick={this.onMessageCloseClick}
          autoClose={!isError}
        />

        <div className={classes.wrapper}>
          <ApiAutoFetchDatagrid
            datasourcePromise={this.getApiPromise}
            actions={["del", "edit"]}
            onEdit={this.onEdit}
            onDelete={this.onDelete}
            headers={this.expenseColumns}
            transformers={{
              spentAt: value => moment(value).format("DD-MM-YYYY")
            }}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(ExpenseTab));
