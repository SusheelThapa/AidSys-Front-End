import React from "react";
import Assets from "../assets/img/assets.png";

function CommonBookedAssets({ asset }) {
  return (
    <React.Fragment>
      <div className="flex items-center flex-col space-y-2 mx-4 mb-8">
        <img src={Assets} className="rounded-lg" alt="asset" />
        <h1 className="font-bold text-lg">{asset.name}</h1>
        <p className="text-sm text-gray-700 mt-0">Date - Date</p>
      </div>
    </React.Fragment>
  );
}

export default CommonBookedAssets;
