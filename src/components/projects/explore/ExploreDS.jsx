import React from "react";
import NotAvailableProjects from "../NotAvailableProjects";

function ExploreDS({ projects, start, end }) {
  return (
    <React.Fragment>
      <div>
        <h1 className="mt-20 font-bold font-serif text-2xl ml-16 text-assets-100 mb-8">
          DATA SCIENCE PROJECTS
        </h1>
        <div className="p-4 flex space-x-4 xl:space-x-12 overflow-x-clip hover:overflow-x-scroll">
          {projects.map((project, index) => {
            if (index > start && index < end)
              return (
                <NotAvailableProjects key={project._id} project={project} />
              );
            return null;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
export default ExploreDS;
