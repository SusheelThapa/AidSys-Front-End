import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./common/Header";
import Hero from "./Hero";

import Loading from "./Loading";

import { doesTokenExist, getTokenData } from "../services/token";
import { getStudentDetail } from "../services/students";

class Homepage extends Component {
  state = { student: null };

  componentDidMount() {
    if (doesTokenExist()) {
      getTokenData().then((res) => {
        console.log(res);
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
      <div
        id="homepage"
        className="flex flex-col justify-between h-screen projectsBg"
      >
        <Header
          studentName={this.state.student.name}
          studentId={this.state.student._id}
        />
        <Hero />

        {/**
         * TODO: Refactor below content into some components
         */}

        <div className="flex justify-end">
          <div
            className="flex flex-col items-center justify-center  w-full  bg-gradient-to-br from-purple-500 to-indigo-500 mt-20  h-40 "
            style={{ "clip-path": "ellipse(60% 100% at 50% 100%)" }}
          >
            <p className="font-bold bg-transparent tracking-wider text-white mt-2 mb-4 text-3xl">
              BE GOOD!<span className="ml-6 text-white">DO GOOD!</span>
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
