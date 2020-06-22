import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./app";

// @ts-ignore
// Production variable comes from webpack config
if (PRODUCTION) {
  ReactDOM.hydrate(<Hello />, document.getElementById("root"));
} else {
  ReactDOM.render(<Hello />, document.getElementById("root"));
}
