// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import React from "react";
import Homepage from "./components/Homepage";

// import { getTokenData } from "./services/request";

// import { doesTokenExist, readToken } from "./services/token";

function App() {
  // TODO: Will be used later on
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!doesTokenExist()) {
  //     navigate("/login");
  //   }
  // });

  // getTokenData(readToken()).then((data) => {
  //   /**
  //    * TODO: Handle the data of that is obtain from token
  //    */
  // });

  return (
    <React.Fragment>
      <Homepage />
    </React.Fragment>
  );
}

export default App;
