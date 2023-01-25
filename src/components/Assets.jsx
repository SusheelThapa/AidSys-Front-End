import React, { Component } from "react";
import Header from "./common/Header";

import { getStudentDetail, getTokenData } from "../services/request";
import { doesTokenExist, readToken } from "../services/token";
import BookedAssets from "./BookedAssets";
import AssetsItems from "./AssetsItems";
import AssetsMap from "./AssetsMap";
import AssetsRecommendation from "./AssetsRecommendation";
import AssetsAdd from "./AssetsAdd";
import Footer from "./common/Footer";
import Loading from "./Loading";

class Assets extends Component {
  state = { student: null };

  componentDidMount() {
    if (doesTokenExist()) {
      getTokenData(readToken()).then((res) => {
        getStudentDetail(res.data.studentID).then((studentdata) => {
          if (studentdata.success) {
            const student = studentdata.student[0];
            console.log(student);
            this.setState({ student: student });
          } else {
            alert(studentdata.message);
          }
        });
      });
    } else {
      /**
       * TODO: Redirect to login page
       */
    }
  }

  render() {
    return this.state.student ? (
      <div>
        <Header studentName={this.state.student.username.toUpperCase()} />
        <div className="h-screen bg-gray-200">
          {/* page one */}
          <div className="flex space-x-6 xl:space-x-32">
            {/* left container */}
            <div className="flex mt-56 pt-8 pb-16 flex-col items-center bg-white w-1/2 xl:mx-14 h-full">
              <h1 className="text-3xl font-bold font-serif text-assets-100">
                WELCOME TO ASSETS PAGE
              </h1>
              <p className="text-left mx-4 text-sm font-bold mt-6 mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur quis, doloremque repudiandae maxime et minima
                aliquam aperiam nostrum minus quo beatae eius sapiente ipsum sed
                veritatis voluptatum sint voluptate ad?
              </p>
              <button className="bg-assets-200 text-white font-bold text-2xl py-2 px-4 rounded-lg hover:bg-indigo-500 duration-200">
                BOOK SEATS NOW
              </button>
            </div>
            {/* right container */}
            <div className="w-1/2 pr-4 xl:pr-14">
              <div className="flex  mt-4">
                <input
                  className="focus:outline-none rounded-lg w-2/3"
                  type="text"
                  name=""
                  id=""
                />
                <button className="w-1/3 bg-assets-200 mx-2 px-4 py-2 text-white font-bold text-xl rounded-lg hover:bg-indigo-500 duration-200">
                  Search
                </button>
              </div>
              <div className=" bg-white mt-4 rounded-lg">
                <h1 className="p-4 text-assets-100 text-2xl font-serif font-bold">
                  YOUR BOOKED ASSETS
                </h1>
                <div>
                  <BookedAssets assets={this.state.student.bookedAssets} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <AssetsItems />
        <AssetsMap />
        <AssetsRecommendation />
        <AssetsAdd />
        <Footer />
      </div>
    ) : (
      <Loading />
    );
  }
}

export default Assets;
