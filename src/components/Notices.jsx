import React, { Component } from "react";
import Header from "./common/Header";

import Loading from "./Loading";
import NoticesGeneral from "./NoticesGeneral";
import NoticesRecent from "./NoticesRecent";
import Footer from "./common/Footer";

import { doesTokenExist, getTokenData } from "../services/token";
import { getStudentDetail } from "../services/students";
import { getNotices } from "../services/notices";

class Notices extends Component {
  state = { student: null, notices: null };

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

    getNotices().then((notices) => {
      this.setState({ notices });
    });
  }
  render() {
    return this.state.student ? (
      <React.Fragment>
        <Header
          studentName={this.state.student.name}
          studentId={this.state.student._id}
        />
        <div className="flex mt-16">
          <div className="w-[70%] space-y-20">
            <h1 className="text-3xl mx-10 font-bold font-serif text-assets-100">
              General Notices
            </h1>

            {this.state.notices.map((notice, index) => {
              if (index < 5)
                return <NoticesGeneral key={notice._id} notice={notice} />;
              return null;
            })}
          </div>
          <div className="space-y-10 mb-60">
            <NoticesRecent
              title={"Recent Notices"}
              notices={this.state.notices}
              start={5}
              end={12}
            />
            <NoticesRecent
              title={"Opportunities"}
              notices={this.state.notices}
              start={12}
              end={18}
            />
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
