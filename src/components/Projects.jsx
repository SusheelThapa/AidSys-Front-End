import React from "react";
import Header from "./common/Header";
import ProjectsForYou from "./projects/ProjectsForYou";

const Projects = () => {
  return (
    <>
      <div className="bg-gray-500 h-screen projectsBg">
        <Header />
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
              <button className="mt-14 mb-4 bg-assets-200 px-8 py-3 rounded-lg hover:bg-indigo-400 text-white font-bold">EXPLORE</button>
            </div>
          </div>
        </div>
      </div>
      <ProjectsForYou/>
    </>
  );
};

export default Projects;
