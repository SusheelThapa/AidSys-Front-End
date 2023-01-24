import React from "react";
import Green from "../../assets/img/green.png";
import Person from "../../assets/img/round-person.png";
import classroom from "../../assets/img/classroom";
function AvailableProjects() {
  return (
    <div>
      <div className="flex flex-col rounded-xl bg-white shadow-lg w-[370px] border">
      <div className="relative">
        <img className="rounded-t-xl" src={classroom} alt="image" />
        <img className="absolute w-10 right-2 top-2" src={Green} alt="green" />
      </div>
        {/* div for overall bottom content */}
        <div className="flex flex-col p-3">
        {/* div for top portion of the bottom content */}
          <div className="flex  justify-between items-center">
          {/* div for image and project name */}
            <div className="flex">
              <img className="w-10 h-10 rounded-full" src={Person} alt="" />
              <div className="flex flex-col ml-4">
                <h2 className="text-sm font-bold">Project Name</h2>
                <p className="text-xs">Team Name Here</p>
              </div>
            </div>
            <div>
                <p className="text-xs"><span className="font-bold">Duration </span>: Date - Date</p>
            </div>
          </div>
          <div className="mt-4 mb-8 text-assets-100 font-bold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptatem.</div>
          <hr />
          {/* div for buttons */}
          <div className="flex justify-between mt-4">
            <button className="font-bold text-sm text-assets-100 underline hover:text-indigo-400">Apply for collab</button>
            <button className="font-bold text-sm text-assets-100 underline hover:text-indigo-400">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailableProjects;
