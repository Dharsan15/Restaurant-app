import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./src/components/Header";
import Body from "./src/components/Body";

const AppLayout = () => (
  <div className="app-layout">
    <React.Fragment>
      <Header />
      <input type="input" placeholder="search" />
      <Body />
      
    </React.Fragment>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(<AppLayout />);
