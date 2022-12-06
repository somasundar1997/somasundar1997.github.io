import React from "react";
import ReactDOM from "react-dom";
import {
  createLightTheme,
  FluentProvider,
  teamsLightTheme,
  Theme,
  themeToTokensObject,
} from "@fluentui/react-components";

import App from "./Layout/App";

ReactDOM.render(
  <FluentProvider theme={teamsLightTheme}>
    <App />
  </FluentProvider>,
  document.getElementById("root")
);
