import React, { Component } from "react";
import Homepage from "./components/Homepage";
import Loading from "./components/Loading";

import { doesTokenExist, getTokenData } from "./services/token";
import { getStudentDetail } from "./services/students";

class App extends Component {
  state = { student: null };

  componentDidMount() {
    if (doesTokenExist()) {
      getTokenData().then((student) => {
        if (student) {
          getStudentDetail(student._id).then((detail) => {
            this.setState({ student: detail });
          });
        } else {
          localStorage.clear();

          window.location.href = "http://localhost:3000/login";
        }
      });
    } else {
      window.location.href = "http://localhost:3000/login";
    }
  }
  render() {
    const { student } = this.state;
    return student ? <Homepage /> : <Loading />;
  }
}

export default App;
