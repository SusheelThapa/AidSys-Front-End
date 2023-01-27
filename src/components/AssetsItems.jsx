import React, { Component } from "react";

import CommonItems from "./CommonItems";
import Loading from "./Loading";

import { getAllAssets } from "../services/assets.js";

class AssetsItems extends Component {
  state = { allAssets: null };

  componentDidMount() {
    getAllAssets().then((assets) => {
      this.setState({ allAssets: assets });
    });
  }
  render() {
    return this.state.allAssets ? (
      // global container
      <div className="bg-white h-full pb-28">
        <div className="flex items-center space-x-12 ">
          {/* left container */}
          <div className="w-1/3 mt-24 ml-8 xl:ml-14">
            <h1 className="uppercase ml-4 font-bold font-serif text-3xl text-assets-100 mb-10">
              Items
            </h1>
            <div className="w-80 h-full flex flex-col bg-white rounded-lg px-8 py-12 shadow-xl items-start border border-black space-y-4">
              <button className="text-2xl font-bold text-assets-100 hover:text-indigo-400">
                Available Now
              </button>
              <button className="text-2xl font-bold text-assets-100 hover:text-indigo-400">
                Tagged
              </button>
              <button className="text-2xl font-bold text-assets-100 hover:text-indigo-400">
                Booked Already
              </button>
              <button className="text-2xl font-bold text-assets-100 hover:text-indigo-400">
                Collections
              </button>
            </div>
          </div>
          {/* right container */}
          <div className="w-2/3">
            <div className="bg-white h-[700px] overflow-y-auto rounded-lg border shadow-xl mr-4 xl:mr-12 mt-20 pr-4 xl:pr-20">
              <div className="flex ">
                <div className="space-x-8 px-6 py-6">
                  <button className="font-bold text-2xl text-assets-100 hover:text-indigo-400 ">
                    List
                  </button>
                  <button className="font-bold text-2xl text-assets-100 hover:text-indigo-400 ">
                    Card
                  </button>
                </div>
              </div>
              <div className="mx-12 mb-8">
                {this.state.allAssets.map((asset) => {
                  if (asset.status === "Avaliable")
                    return <CommonItems key={asset._id} asset={asset} />;
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Loading />
    );
  }
}

export default AssetsItems;
