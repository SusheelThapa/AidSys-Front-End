import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";

import { doesTokenExist } from "./services/token";

function App() {
  /**
   * For redirection purpose
   */
  const navigate = useNavigate();

  useEffect(() => {
    if (!doesTokenExist()) {
      navigate("/login");
    }
  });

  return (
    /**
     * Token can be considered as identity of user.
     * If token is present in localStorage then we will show Header SideBar Workspace
     * If token is not present in localStorage then we will show Login page
     */
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
