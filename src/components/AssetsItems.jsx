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
      <div className="bg-white h-full pb-28" id="explore-assets">
        <div className="flex justify-center items-center space-x-12 ">
          
          {/* right container */}
          <div className="   w-4/5">
            <div className="bg-white h-[700px] overflow-y-auto rounded-lg border shadow-xl mr-4 xl:mr-12 mt-20 pr-4 xl:pr-20">
              <div className="flex ">
                <div className="space-x-8 px-6 py-6">
                  <button className="font-bold text-2xl text-assets-100 hover:text-indigo-400 ">
                    List
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
