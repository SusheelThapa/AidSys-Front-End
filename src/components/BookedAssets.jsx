import React from "react";

import Addmore from "../assets/img/addMore.svg";

import CommonBookedAssets from "./CommonBookedAssets";

function BookedAssets({ assets }) {
  return (
    <div>
      <div className="grid grid-cols-3 space-x-8  ">
        {assets.map((asset) => {
          return <CommonBookedAssets key={asset._id} asset={asset} />;
        })}

        <div className="group mx-0 h-56">
          <div className="group-hover:cursor-pointer flex items-center flex-col space-y-2 mx-4  outline outline-gray-500 rounded-lg">
            <img src={Addmore} className="w-40" alt="" />
            <h1 className="font-bold underline text-gray-500 text-sm">
              Add More
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookedAssets;
