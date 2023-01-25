import React from "react";
import RoundPerson from "../assets/img/round-person.png"
function ProjectTeam() {
  return (
    <div className="mt-20 mx-10">
      <h1 className="text-3xl text-assets-100 font-bold  font-serif">
        Current Team
      </h1>
      <div className="flex mx-auto max-w-fit rounded-xl shadow-xl py-4 px-16 border mt-8">
        <img className="w-44" src={RoundPerson} alt="" />
        <div className="flex flex-col justify-center ml-8">
            <h1 className="text-2xl text-assets-100">Person Name</h1>
            <h3 className="mt-2 text-xl text-gray-600">Project Name</h3>
            <p className="mt-2 italic text-lg mx-8">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, mollitia quibusdam voluptate ipsum debitis id enim repellendus soluta sed veniam."</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectTeam;
