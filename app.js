import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

const AppLayout = () => (
  <div className="app-layout">
    <>
      <Header />
      <input type="input" placeholder="search" />
      <Body />
    </>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(<AppLayout />);
