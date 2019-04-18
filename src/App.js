import React, { Component } from "react";
import Loadable from "react-loading-overlay";
import Body from "./components/Body/Body.js";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import "./App.css";
import { MUITHEME_CONST } from "./constants/colors";

const muiTheme = getMuiTheme(MUITHEME_CONST);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Body />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
