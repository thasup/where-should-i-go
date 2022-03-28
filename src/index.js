import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";

import App from "./App";

export const initGA = () => {
  ReactGA.initialize("G-9Y39PXYVCR");
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const GAevent = (categoryName, actionName, labelName, value) => {
  ReactGA.event({
    category: categoryName, // Required
    action: actionName, // Required
    label: labelName || "labelName",
    value: value || 10,
    nonInteraction: false,
  });
};

ReactDOM.render(<App />, document.getElementById("root"));
