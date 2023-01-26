import React from "react";
import RoundPerson from "../assets/img/round-person.png";
function ProjectTeam({ teamMember }) {
  const handleName = (link) => {
    window.location.href = link;
  };
  return (
    <div className="mt-20 mx-10">
      <h1 className="text-3xl text-assets-100 font-bold  font-serif">
        Current Team
      </h1>
      <div className="flex justify-center m-3">
        {teamMember.map((member) => {
          return (
            <div className="flex m-3 max-w-fit rounded-xl shadow-xl py-4 px-16 border mt-8">
              <img className="w-44" src={RoundPerson} alt="" />
              <div className="flex flex-row justify-center items-center ml-8">
                <h1
                  className="text-2xl text-assets-100"
                  onClick={() => handleName(`${member.link}`)}
                >
                  {member.name}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectTeam;
