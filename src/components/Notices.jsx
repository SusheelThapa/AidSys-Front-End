import React, { Component } from "react";
import Header from "./common/Header";

import { getStudentDetail, getTokenData } from "../services/request";
import { doesTokenExist, readToken } from "../services/token";
import Loading from "./Loading";

class Notices extends Component {
  state = { student: null };

  componentDidMount() {
    if (doesTokenExist()) {
      getTokenData(readToken()).then((res) => {
        getStudentDetail(res.data.studentID).then((studentdata) => {
          if (studentdata.success) {
            const student = studentdata.student[0];
            console.log(student);
            this.setState({ student: student });
          } else {
            alert(studentdata.message);
          }
        });
      });
    } else {
      /**
       * TODO: Redirect to login page
       */
    }
  }
  render() {
    return this.state.student ? (
      <React.Fragment>
        <Header studentName={this.state.student.username.toUpperCase()} />
      </React.Fragment>
    ) : (
      <Loading />
    );
  }
}

export default Notices;
