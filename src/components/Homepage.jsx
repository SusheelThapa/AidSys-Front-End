import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./common/Header";
import Hero from "./Hero";

import { getStudentDetail, getTokenData } from "../services/request";
import { doesTokenExist, readToken } from "../services/token";

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

        <div className="flex justify-center">
          <div className="flex flex-col items-center bg-blue-800 mt-20 rounded-t-full w-[700px] h-28 xl:w-[1000px]">
            <Link
              className="mt-4 bg-blue-800 text-yellow-400 hover:text-yellow-600 font-bold underline"
              to="#"
            >
              Explore More
            </Link>
            <p className="font-bold bg-blue-800 text-white mt-2 mb-4 text-2xl">
              Motto goes here!
            </p>
          </div>
        </div>
      </div>
    ) : (
      <h1>Loading</h1>
    );
  }
}

export default Homepage;
