import React, { Component } from "react";

import Header from "./common/Header";
import Hero from "./Hero";

class Homepage extends Component {
  render() {
    const { student } = this.props;
    return (
      <div
        id="homepage"
        className="flex flex-col justify-between h-screen projectsBg"
      >
        <Header studentName={student.name} studentId={student._id} />
        <Hero />

        <div className="flex justify-end">
          <div
            className="flex flex-col items-center justify-center  w-full  bg-gradient-to-br from-purple-500 to-indigo-500 mt-20  h-40 "
            style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }}
          >
            <p className="font-bold bg-transparent tracking-wider text-white mt-2 mb-4 text-3xl">
              BE GOOD!<span className="ml-6 text-white">DO GOOD!</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
