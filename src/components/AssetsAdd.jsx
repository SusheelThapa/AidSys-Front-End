import React from "react";
import { useRef } from "react";
import { addAsset } from "../services/request";

function AssetsAdd() {
  const name = useRef();
  const description = useRef();

  const handleAddAsset = async () => {
    /**
     * Need to create a route to add assets
     */
    const assetName = name.current.value;

    const assetDescription = description.current.value;

    await addAsset(assetName);

    name.current.value = "";
    description.current.value = "";
  };
  return (
    <div className="my-32">
      <p className="text-3xl font-bold text-assets-100 mx-8 font-serif">
        LEND THE ASSETS YOU OWN
      </p>
      <div className="flex justify-center items-center mt-10">
        <div className="rounded-lg w-[700px] xl:w-[800px] border shadow-2xl">
          <h1 className="text-assets-100 text-2xl font-bold font-serif p-4">
            Description
          </h1>
          <div className="flex flex-col">
            <div className="px-6 flex space-x-4 mb-8">
              <input
                className="focus:outline-none border rounded-lg w-3/5 p-2 placeholder:italic "
                type="text"
                name=""
                id=""
                placeholder="Name of asset"
                ref={name}
              />
              <input
                className="focus:outline-none border rounded-lg w-2/5 p-2 placeholder:italic "
                type="text"
                name=""
                id=""
                placeholder="Duration to lend it"
              />
            </div>
            <div className="px-6 mb-4">
              <textarea
                id="message"
                rows="6"
                className=" p-2.5 w-full rounded-lg border focus:outline-none placeholder:italic "
                placeholder="Brief description about the asset"
                ref={description}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center mb-8">
            <button
              onClick={handleAddAsset}
              className="bg-assets-200 hover:bg-indigo-400 px-10 py-3 rounded-lg text-white font-bold text-xl"
            >
              ADD TO ASSETS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetsAdd;
