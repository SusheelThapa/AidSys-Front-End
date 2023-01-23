import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Homepage from "./components/Homepage";

import { doesTokenExist, readToken } from "./services/token";
import { getTokenData } from "./services/request";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (doesTokenExist()) {
      getTokenData(readToken()).then((res) => {
        if (res.data.error) {
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
