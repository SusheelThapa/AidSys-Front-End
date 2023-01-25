import React from "react";
import AvailableProjects from "./AvailableProjects";
import NotAvailableProjects from "./NotAvailableProjects";
import ExploreWebDev from "./explore/ExploreWebDev";
import ExploreAR from "./explore/ExploreAR";
import ExploreAppDev from "./explore/ExploreAppDev";
import ExploreDS from "./explore/ExploreDS";
import PostProject from "./PostProject";
import Footer from "../common/Footer";

function ProjectsForYou({ projects }) {
  return (
    <React.Fragment>
      <div>
        <h1 className="mt-12 font-bold font-serif text-3xl ml-16 text-assets-100 mb-8">
          Projects For You
        </h1>
      </div>
      {/** */}
      <div className="p-4 grid grid-cols-3 gap-0.5 justify-around justify-items-center items-center">
        {projects.map((project) => {
          return <AvailableProjects key={project._id} project={project} />;
        })}
      </div>

      <h2 className="mt-20 text-3xl font-bold text-assets-100 ml-16 font-serif">
        EXPLORE BY CATEGORIES
      </h2>
      <ExploreWebDev />
      <ExploreAppDev />
      <ExploreAR />
      <ExploreDS />
      <PostProject />
      <Footer />
    </React.Fragment>
  );
}

export default ProjectsForYou;
