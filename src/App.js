import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Homepage from "./components/Homepage";

import { doesTokenExist } from "./services/token";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!doesTokenExist()) {
      navigate("/login");
    }
  });

  return (
    <React.Fragment>
      <Homepage />
    </React.Fragment>
  );
}

export default App;
