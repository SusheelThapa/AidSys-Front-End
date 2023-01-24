import React from "react";
import Classroom from "../assets/img/classroom.png";
function CommonItems() {
  return (
    <div className="flex hover:shadow-2xl p-2 space-y-8">
      <img className="h-32 w-32 rounded-lg shadow-lg" src={Classroom} alt="" srcset="" />
      <div className=" ml-4 flex flex-col justify-center">
        <div className="flex justify-between space-x-4">
          <p className="font-bold">Something Here</p>
          <p className="text-sm text-gray-500">
            Can be rented from Date - Date
          </p>
        </div>
        <div>
          <p className=" text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem est illo, reprehenderit molestiae harum voluptatibus ducimus enim unde soluta.
          </p>
          <div className="cursor-pointer underline text-sm flex justify-end font-bold">
            See more
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonItems;
