import React from "react";
import Maps from "../assets/img/maps.png"

function AssetsMap() {
  return (
    <div>
      <h1 className=" text-3xl font-bold text-assets-100 mx-8 font-serif">RESERVE FROM THE MAP</h1>
      <img className="mt-10  w-full" src={Maps} alt="" />
      <div className="flex justify-center mt-8 mb-14">
        <button className="bg-assets-200 font-bold text-2xl text-white rounded-md px-2 py-3 hover:bg-indigo-400">RESERVE THE VENUE</button>
      </div>
    </div>
  );
}

export default AssetsMap;
