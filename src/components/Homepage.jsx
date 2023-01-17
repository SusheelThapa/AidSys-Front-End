import React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Workspace from "./Workspace";

import "../assets/css/homepage.css";

const Homepage = () => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Workspace />
    </React.Fragment>
  );
};

export default Homepage;
