import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";

import { getToken } from "./services/token";

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    /**
     * This useEffect get the token store in local storage and
     * set the value of token
     */
    const tokenLocal = getToken();

    setToken(tokenLocal);
  }, []);

  return (
    /**
     * Token can be considered as identity of user.
     * If token is present in localStorage then we will show Header SideBar Workspace
     * If token is not present in localStorage then we will show Login page
     */
    <React.Fragment>
      {token != null && (
        <div>
          <Header />
          <Sidebar />
          <Workspace />
        </div>
      )}

      {token == null && <Login />}
    </React.Fragment>
  );
}

export default App;
