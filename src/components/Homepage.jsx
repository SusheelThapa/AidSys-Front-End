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
      <div id="homepage" className="flex flex-col justify-between h-screen projectsBg">
        <Header studentName={this.state.student.name} studentId={this.state.student._id} />
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
              <Link to={"/projects"}>Explore More</Link>
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
