import React from "react";
import AvailableProjects from "./AvailableProjects";
import NotAvailableProjects from "./NotAvailableProjects";
import ExploreWebDev from "./explore/ExploreWebDev";
import ExploreAR from "./explore/ExploreAR";
import ExploreAppDev from "./explore/ExploreAppDev";
import ExploreDS from "./explore/ExploreDS";
import PostProject from "./PostProject";
import Footer from "../common/Footer";

function ProjectsForYou() {
  return (
    <>
      <div>
        <h1 className="mt-12 font-bold font-serif text-3xl ml-16 text-assets-100 mb-8">
          Projects For You
        </h1>
      </div>
      <div className="p-4 flex xl:justify-center space-x-2 xl:space-x-12">
        <AvailableProjects/>
        <NotAvailableProjects/>
        <AvailableProjects/>
      </div>
      <div className="p-4 flex xl:justify-center space-x-2 xl:space-x-12">
        <NotAvailableProjects/>
        <AvailableProjects/>
        <NotAvailableProjects/>
        </div>
        <h2 className="mt-20 text-3xl font-bold text-assets-100 ml-16 font-serif">EXPLORE BY CATEGORIES</h2>
      <ExploreWebDev/>
      <ExploreAppDev/>
      <ExploreAR/>
      <ExploreDS/>
      <PostProject/>
      <Footer/>
    </>
  );
}

export default ProjectsForYou;
