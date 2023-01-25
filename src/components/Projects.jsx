import React, { Component } from "react";
import Header from "./common/Header";
import ProjectsForYou from "./projects/ProjectsForYou";

import {
  getAllProjects,
  getStudentDetail,
  getTokenData,
} from "../services/request";
import { doesTokenExist, readToken } from "../services/token";
import Loading from "./Loading";
class Projects extends Component {
  state = { student: null, projects: null };

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

    getAllProjects().then((res) => {
      if (res.success) {
        this.setState({ projects: res.projects });
      }
    });
  }

  render() {
    return this.state.student ? (
      <React.Fragment>
        <div className="bg-gray-500 h-screen projectsBg">
          <Header studentName={this.state.student.username.toUpperCase()} />
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
                <button className="mt-14 mb-4 bg-assets-200 px-8 py-3 rounded-lg hover:bg-indigo-400 text-white font-bold">
                  EXPLORE
                </button>
              </div>
            </div>
          </div>
        </div>
        <ProjectsForYou projects={this.state.projects} />
      </React.Fragment>
    ) : (
      <Loading />
    );
  }
}

export default Projects;
