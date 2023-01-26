import React, { Component } from "react";

import Header from "./common/Header";
import Loading from "./Loading";
import Footer from "./common/Footer";

import Laptop from "../assets/img/laptop.png";
import LaptopTwo from "../assets/img/laptop2.png";
import LaptopThree from "../assets/img/laptop3.png";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import ProjectTeam from "./ProjectTeam";
import ProjectVacancy from "./ProjectVacancy";
import ProjectApplication from "./ProjectApplication";

import { doesTokenExist, getTokenData } from "../services/token";
import { getStudentDetail } from "../services/students";
import { getProject } from "../services/projects";

class Project extends Component {
  state = {
    student: null,
    currentSliderIndex: 0,
    slider: [
      {
        image: Laptop,
      },
      {
        image: LaptopTwo,
      },
      {
        image: LaptopThree,
      },
    ],
    project: null,
  };

  prevSlide = () => {
    const isFirstSlide = this.state.currentSliderIndex === 0;
    const newSliderIndex = isFirstSlide
      ? this.state.slider.length - 1
      : this.state.currentSliderIndex - 1;

    this.setState({ currentSliderIndex: newSliderIndex });
  };

  nextSlide = () => {
    const isLastSlide =
      this.state.currentSliderIndex === this.state.slider.length - 1;
    const newSliderIndex = isLastSlide ? 0 : this.state.currentSliderIndex + 1;
    this.setState({ currentSliderIndex: newSliderIndex });
  };

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

    const projectId = window.location.pathname.split("/")[2];

    getProject(projectId).then((project) => {
      this.setState({ project });
    });
  }
  render() {
    return this.state.student ? (
      <React.Fragment>
        <Header studentName={this.state.student.name} />
        <div className="mx-10 my-12">
          <h1 className="text-3xl text-assets-100 font-bold  font-serif">
            Project Name
          </h1>
          <div className="flex space-x-10 2xl:space-x-48">
            <div className="mt-4 w-3/5">
              <p className="text-lg mt-4">{this.state.project.description}</p>
            </div>
            <div className="w-2/5 flex-col flex justify-center">
              <div className="max-w-[600px] relative group rounded-xl">
                <img
                  src={this.state.slider[this.state.currentSliderIndex].image}
                  alt=""
                />
                {/* left arrow */}
                <div
                  className="absolute top-[40%] bg-white bg-opacity-50 mx-3 cursor-pointer rounded-full -translate-x-0 translate-y-[50] hidden group-hover:block"
                  onClick={this.prevSlide}
                >
                  <BsChevronCompactLeft size={60} />
                </div>
                <div
                  className="absolute top-[40%] bg-white bg-opacity-50 cursor-pointer rounded-full -translate-x-0 translate-y-[50] right-5 hidden group-hover:block"
                  onClick={this.nextSlide}
                >
                  {/* right arrow */}
                  <BsChevronCompactRight size={60} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProjectTeam teamMember={this.state.project.teammember} />
        <ProjectVacancy />
        <ProjectApplication />
        <Footer />
      </React.Fragment>
    ) : (
      <Loading />
    );
  }
}

export default Project;
