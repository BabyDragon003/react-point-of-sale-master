import React, { Component } from "react";
import { withRouter } from "react-router";
import { withStyles } from "material-ui/styles";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import MainContainer from "../controls/MainContainer";
import Routes from "./Routes";

// eslint-disable-next-line
const styles = theme => ({
  root: {
    zIndex: 1,
    // overflow: "auto",
    display: "flex",
    // width: "100%",
    height: "calc(100vh - 1px)", // TODO needs to figure why. For now its a hack :)
    borderBottom: "1px solid #e0e0e0"
  }
});

        />
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={this.handleDrawerToggle}
        />
        <MainContainer shouldRenderMobileMenu={shouldRenderMobileMenu}>
          <Routes />
        </MainContainer>
      </div>
    );
  }
}

const component = withStyles(styles, { withTheme: true })(Home);

export default withRouter(component);
