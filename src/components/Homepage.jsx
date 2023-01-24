import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./common/Header";
import Hero from "./Hero";

import { getStudentDetail, getTokenData } from "../services/request";
import { doesTokenExist, readToken } from "../services/token";
import Loading from "./Loading";

class Homepage extends Component {
  state = { student: null };

  componentDidMount() {
    if (doesTokenExist()) {
      getTokenData(readToken()).then((res) => {
        getStudentDetail(res.data.studentID).then((studentdata) => {
          if (studentdata.success) {
            const student = studentdata.student[0];
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
      <div id="homepage" className="flex flex-col justify-between h-screen">
        <Header studentName={this.state.student.username.toUpperCase()} />
        <Hero />

        {/**
         * TODO: Refactor below content into some components
         */}

        <div className="flex justify-end">
          <div
            className="flex flex-col items-center justify-end  w-full  bg-gradient-to-br from-purple-500 to-indigo-500 mt-20  h-40 "
            style={{ "clip-path": "ellipse(60% 100% at 50% 100%)" }}
          >
            <Link
              className="mt-4 bg-transparent text-yellow-400 hover:text-yellow-600 font-bold underline"
              to="#"
            >
              Explore More
            </Link>
            <p className="font-bold bg-transparent  text-white mt-2 mb-4 text-2xl">
              Motto goes here!
            </p>
          </div>
        </div>
      </div>
    ) : (
      <Loading />
    );
  }
}

export default Homepage;
