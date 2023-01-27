import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Homepage from "./components/Homepage";
import { doesTokenExist, getTokenData } from "./services/token";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (doesTokenExist()) {
      getTokenData().then((res) => {
        if (!res) {
          localStorage.clear();
          navigate("/login");
        }
      });
    } else {
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
