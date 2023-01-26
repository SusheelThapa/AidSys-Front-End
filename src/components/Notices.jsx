import React, { Component } from "react";
import Header from "./common/Header";

import { getStudentDetail, getTokenData } from "../services/request";
import { doesTokenExist, readToken } from "../services/token";
import Loading from "./Loading";
import NoticesGeneral from "./NoticesGeneral";
import NoticesRecent from "./NoticesRecent";

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
        <div className="flex mt-16">
          <div className="w-[70%] space-y-20">
            <h1 className="text-3xl mx-10 font-bold font-serif text-assets-100">
              General Notices
            </h1>

            <NoticesGeneral />
            <NoticesGeneral />
            <NoticesGeneral />
            <NoticesGeneral />
          </div>
          <div className="space-y-10">

          <NoticesRecent  title={"Notices"}/>
          <NoticesRecent title={"Opportunities"}/>
          </div>
        </div>
      </React.Fragment>
    ) : (
      <Loading />
    );
  }
}

export default Notices;
