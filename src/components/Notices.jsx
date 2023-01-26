import React, { Component } from "react";
import Header from "./common/Header";

import Loading from "./Loading";
import NoticesGeneral from "./NoticesGeneral";
import NoticesRecent from "./NoticesRecent";
import Footer from "./common/Footer";

import { doesTokenExist, getTokenData } from "../services/token";
import { getStudentDetail } from "../services/students";

class Notices extends Component {
  state = { student: null };

  componentDidMount() {
    if (doesTokenExist()) {
      getTokenData().then((res) => {
        getStudentDetail(res._id).then((student) => {
          this.setState({ student });
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
        <Header studentName={this.state.student.name} />
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
          <div className="space-y-10 mb-60">
            <NoticesRecent title={"Recent Notices"} />
            <NoticesRecent title={"Opportunities"} />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    ) : (
      <Loading />
    );
  }
}

export default Notices;
