import React from "react";

import Green from "../../assets/img/green.png";
import Red from "../../assets/img/red.png";
import Person from "../../assets/img/round-person.png";
import laptop from "../../assets/img/laptop3.png";

import webdevone from "../../assets/img/web-dev-one.jpg";
import webdevtwo from "../../assets/img/web-dev-two.jpg";
import webdevthree from "../../assets/img/web-dev-three.jpg";

import appdevone from "../../assets/img/app-dev-one.jpg";
import appdevtwo from "../../assets/img/app-dev-two.jpg";
import appdevthree from "../../assets/img/app-dev-three.jpg";

import dsone from "../../assets/img/data-science-one.jpg";
import dstwo from "../../assets/img/data-science-two.jpg";
import dsthree from "../../assets/img/data-science-three.jpg";

import aione from "../../assets/img/AI-one.jpg";
import aitwo from "../../assets/img/AI-two.jpg";
import aithree from "../../assets/img/AI-three.jpg";

import otherone from "../../assets/img/other-one.jpg";
import othertwo from "../../assets/img/other-two.jpg";
import otherthree from "../../assets/img/other-three.jpg";

function NotAvailableProjects({ project, type, index, active }) {
  const projectActive = () => {
    return active === true ? Green : Red;
  };
  const getImageSrc = () => {
    if (type === "webdev") {
      switch (index % 3) {
        case 0:
          return webdevone;
        case 1:
          return webdevtwo;
        case 2:
          return webdevthree;
        default:
          return laptop;
      }
    } else if (type === "appdev") {
      switch (index % 3) {
        case 0:
          return appdevone;
        case 1:
          return appdevtwo;
        case 2:
          return appdevthree;
        default:
          return laptop;
      }
    } else if (type === "ds") {
      switch (index % 3) {
        case 0:
          return dsone;
        case 1:
          return dstwo;
        case 2:
          return dsthree;
        default:
          return laptop;
      }
    } else if (type === "other") {
      switch (index % 3) {
        case 0:
          return otherone;
        case 1:
          return othertwo;
        case 2:
          return otherthree;
        default:
          return laptop;
      }
    } else if (type === "ai") {
      switch (index % 3) {
        case 0:
          return aione;
        case 1:
          return aitwo;
        case 2:
          return aithree;
        default:
          return laptop;
      }
    }
    return laptop;
  };
  return (
    <div className="m-2">
      <div className="flex flex-col rounded-xl bg-white shadow-lg w-[370px] border">
        <div className="relative">
          <img
            className="rounded-t-xl h-64 w-full"
            src={getImageSrc()}
            alt="classroom"
          />
          <img className="absolute w-10 right-2 top-2" src={Red} alt="green" />
        </div>
        {/* div for overall bottom content */}
        <div className="flex flex-col p-3">
          {/* div for top portion of the bottom content */}
          <div className="flex  justify-between items-center">
            {/* div for image and project name */}
            <div className="flex">
              <img className="w-10 h-10 rounded-full" src={Person} alt="" />
              <div className="flex flex-col ml-4">
                <h2 className="text-sm font-bold">{project.name}</h2>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-8 text-assets-100 font-bold text-sm">
            {project.description}
          </div>
          <hr />
          {/* div for buttons */}
          <div className="flex justify-between mt-4">
            <p
              type="button"
              className="font-bold text-sm underline text-indigo-300 cursor-not-allowed"
            >
              Apply for collab
            </p>
            <button className="font-bold text-sm text-assets-100 underline hover:text-indigo-400">
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotAvailableProjects;
