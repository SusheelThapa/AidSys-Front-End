import React, { Component } from "react";
import Header from "./common/Header";

import Classroom from "../assets/img/classroom.png";

import Loading from "./Loading";

import AssetBookingRating from "./AssetBookingRating";
import Footer from "./common/Footer";
import AssetReview from "./AssetReview";
import { doesTokenExist, getTokenData } from "../services/token";
import { getStudentDetail } from "../services/students";
import { getAsset } from "../services/assets";

class Asset extends Component {
  state = { student: null, asset: null };

  componentDidMount() {
    if (doesTokenExist()) {
      getTokenData().then((res) => {
        getStudentDetail(res._id).then((student) => {
          this.setState({ student });
        });
      });
    } else {
      /**
       * TODO: Redirect to login page
       */
    }

    getAsset(window.location.pathname.split("/")[2]).then((asset) => {
      this.setState({ asset });
    });
  }

  assetBookingClass() {
    if (this.state.asset.status === "Avaliable") {
      return null;
    }
    return "disabled";
  }

  render() {
    console.log(this.state.asset);
    return this.state.student ? (
      <React.Fragment>
        <Header studentName={this.state.student.name} />
        <div className="flex justify-between h-[90vh]">
          <div className="w-1/2 ">
            <img
              className="h-[94vh] rounded-lg shadow-2xl"
              src={Classroom}
              alt="img"
            />
          </div>
          <div className="flex flex-col p-6 ml-6 items-center justify-center w-1/2">
            <h1 className="text-assets-100 font-bold text-3xl font-serif mb-8">
              {this.state.asset.name}
            </h1>
            <p className="text-xl font-bold">
              {this.state.asset.description}
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              eveniet rem adipisci obcaecati doloribus tempora reprehenderit
              nobis dolorum suscipit dicta. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Eum, eveniet! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ab, quasi id pariatur similique
              ullam perspiciatis.
            </p>
            <div className="flex space-x-4 xl:space-x-10 mt-10">
              <button
                className={
                  "px-4 py-2 font-bold text-xl text-white bg-green-700 hover:bg-green-600 w-60 rounded-lg h-20 " +
                  this.assetBookingClass()
                }
              >
                {this.state.asset.status === "Avaliable"
                  ? "AVAILABLE"
                  : "NOT AVAILABLE"}
              </button>
              <button
                className={
                  this.assetBookingClass() +
                  " px-4 py-2 font-bold text-xl text-white bg-assets-200 w-60 hover:bg-indigo-400 rounded-lg"
                }
              >
                BOOK
              </button>
            </div>
          </div>
        </div>

        <AssetBookingRating bookings={this.state.asset.previousBooking} />
        <AssetReview reviews={this.state.asset.review} />
        <Footer />
      </React.Fragment>
    ) : (
      <Loading />
    );
  }
}

export default Asset;
