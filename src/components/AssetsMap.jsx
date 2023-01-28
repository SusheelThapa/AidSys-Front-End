import React from "react";
import Maps from "../assets/img/maps.png"

function AssetsMap() {
  return (
    <div>
      <h1 className=" text-3xl font-bold text-assets-100 mx-8 font-serif">RESERVE FROM THE MAP</h1>
      <img className="mt-10  w-full" src={Maps} alt="" />
      <div className="flex justify-center mt-8 mb-14">
        <a href="https://www.google.com/maps/place/Institute+of+Engineering,+Pulchowk+Campus/@27.6810958,85.3163061,17z/data=!3m1!4b1!4m5!3m4!1s0x39eb19cbf6b89eb7:0x951b3c8ac733e3ec!8m2!3d27.6810911!4d85.3184948" className="bg-assets-200 font-bold text-2xl text-white rounded-md px-2 py-3 hover:bg-indigo-400">RESERVE THE VENUE</a>
      </div>
    </div>
  );
}

export default AssetsMap;
