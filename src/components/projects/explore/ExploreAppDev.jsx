import React from "react";
import NotAvailableProjects from "../NotAvailableProjects";

function ExploreAppDev() {
  return (
    <>
      <div>
        <h1 className="mt-20 font-bold font-serif text-2xl ml-16 text-assets-100 mb-8">
          APP DEVELOPMENT
        </h1>
        <div className="p-4 flex space-x-4 xl:space-x-12 overflow-x-scroll">
          <NotAvailableProjects />
          <NotAvailableProjects />
          <NotAvailableProjects />
          <NotAvailableProjects />
          <NotAvailableProjects />
        </div>
      </div>
    </>
  );
}

export default ExploreAppDev;
