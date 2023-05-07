import React from "react";
import ReactDOM from "react-dom";

import { ContextProvider } from "./Admin/contexts/ContextProvider";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
