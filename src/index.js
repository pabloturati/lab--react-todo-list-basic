import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import dataSource from "./data/dataSource";

ReactDOM.render(
  <App initialData={dataSource} />,
  document.getElementById("root")
);
registerServiceWorker();
