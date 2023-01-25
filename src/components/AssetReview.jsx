import React from "react";
import RoundPerson from "../assets/img/round-person.png";
function AssetReview() {
  return (
    <div className="mt-32 mb-32">
      <h1 className="font-bold text-assets-100 font-serif text-3xl ml-20">
        REVIEWS AND SUGGESTIONS
      </h1>
      <div className="rounded-xl shadow-lg w-[70%] mx-auto mt-8">
        <div className="flex p-4">
          <div className="flex flex-col">
            <div className="flex items-center">
              <img className="w-16" src={RoundPerson} alt="img" />
              <h2 className="ml-3 text-2xl font-bold text-assets-100">
                Person Name
              </h2>
            </div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              incidunt rerum quaerat quas ullam, sed, cum quod minima corrupti
              asperiores iure laudantium hic itaque. Voluptatibus?
            </p>
          </div>
        </div>
        <hr />
        <div className="flex p-4">
          <div className="flex flex-col">
            <div className="flex items-center">
              <img className="w-16" src={RoundPerson} alt="img" />
              <h2 className="ml-3 text-2xl font-bold text-assets-100">
                Person Name
              </h2>
            </div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              incidunt rerum quaerat quas ullam, sed, cum quod minima corrupti
              asperiores iure laudantium hic itaque. Voluptatibus?
            </p>
          </div>
        </div>
        <hr />
        <div className="flex p-4">
          <div className="flex flex-col">
            <div className="flex items-center">
              <img className="w-16" src={RoundPerson} alt="img" />
              <h2 className="ml-3 text-2xl font-bold text-assets-100">
                Person Name
              </h2>
            </div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              incidunt rerum quaerat quas ullam, sed, cum quod minima corrupti
              asperiores iure laudantium hic itaque. Voluptatibus?
            </p>
          </div>
        </div>
        <hr />
        <div className="flex p-4 mt-6">
          <input className="rounded-lg border w-4/5 p-3 placeholder:italic" type="text" placeholder="Add a review" />
          <button className="bg-assets-200 px-4 py-2 w-1/5 rounded-lg ml-10 hover:bg-indigo-400 font-bold text-white">POST</button>
        </div>
      </div>
    </div>
  );
}

export default AssetReview;
