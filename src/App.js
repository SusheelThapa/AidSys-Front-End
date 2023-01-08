import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";
import { getTokenData } from "./services/request";

import { doesTokenExist, readToken } from "./services/token";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!doesTokenExist()) {
      navigate("/login");
    }
  });

  getTokenData(readToken()).then((data) => {
    /**
     * TODO: Handle the data of that is obtain from token
     */
  });

  return (
    <React.Fragment>
      <div>
        <Header />
        <Sidebar />
        <Workspace />
      </div>
    </React.Fragment>
  );
}

export default App;
