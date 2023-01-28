import React, { Component } from "react";

import Header from "./common/Header";
import Loading from "./Loading";

import ProjectsForYou from "./projects/ProjectsForYou";

import { doesTokenExist, getTokenData } from "../services/token";
import { getStudentDetail } from "../services/students";
import { addProject, getAllProjects } from "../services/projects";

class Projects extends Component {
  state = { student: null, projects: null };

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

    getAllProjects().then((projects) => {
      this.setState({ projects });
    });
  }

  handleAddProject = async (project) => {
    project.owner = this.state.student._id;

    console.log(project);
    addProject(project).then((res) => {
      window.location.reload();
    });
  };

  render() {
    let webdev = [];
    let appdev = [];
    let ai = [];
    let ds = [];

    const { projects } = this.state;
    if (projects) {
      webdev = projects.filter((project) => {
        return project.categories.indexOf("WebDev") !== -1;
      });
      appdev = projects.filter((project) => {
        return project.categories.indexOf("AppDev") !== -1;
      });
      ai = projects.filter((project) => {
        return project.categories.indexOf("AI") !== -1;
      });
      ds = projects.filter((project) => {
        return project.categories.indexOf("DS") !== -1;
      });
    }

    return this.state.student ? (
      <React.Fragment>
        <div className="bg-gray-500 h-screen projectsBgLaptop">
          <Header
            studentName={this.state.student.name}
            studentId={this.state.student._id}
          />
          <div className="w-1/2 max-w-xl mt-36 ml-36 bg-white rounded-lg shadow-lg ">
            <div className="flex flex-col space-y-4 px-4 py-14">
              <p>
                <span className="font-bold text-xl text-assets-100 mr-3 ml-4">
                  FIND
                </span>{" "}
                about all the projects active or inactive
              </p>
              <p>
                <span className="font-bold text-xl text-assets-100 mr-3 ml-4">
                  LEARN{" "}
                </span>
                about them all and explore the ideas
              </p>
              <p>
                <span className="font-bold text-xl text-assets-100 mr-3 ml-4">
                  COLLAB
                </span>{" "}
                with your fellow peers to build something new
              </p>
              <div className="flex justify-center">
                <a href="#explore-projects">
                  <button className="mt-14 mb-4 bg-assets-200 px-8 py-3 rounded-lg hover:bg-indigo-400 text-white font-bold">
                    EXPLORE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {projects && (
          <ProjectsForYou
            onClickAddProject={this.handleAddProject}
            projects={this.state.projects}
            webdev={webdev}
            ds={ds}
            ai={ai}
            appdev={appdev}
          />
        )}
      </React.Fragment>
    ) : (
      <Loading />
    );
  }
}

export default Projects;
