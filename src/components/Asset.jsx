import React, { Component } from "react";
import Header from "./common/Header";

import Classroom from "../assets/img/classroom.png";
import { getStudentDetail, getTokenData } from "../services/request";
import { doesTokenExist, readToken } from "../services/token";
import Loading from "./Loading";
class Asset extends Component {
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
      <React.Fragment>
        <Header studentName={this.state.student.username.toUpperCase()} />
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
              Name of the Asset
            </h1>
            <p className="text-xl font-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              eveniet rem adipisci obcaecati doloribus tempora reprehenderit
              nobis dolorum suscipit dicta. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Eum, eveniet! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ab, quasi id pariatur similique
              ullam perspiciatis.
            </p>
            <div className="flex space-x-4 xl:space-x-10 mt-10">
              <button className="px-4 py-2 font-bold text-xl text-white bg-green-700 hover:bg-green-600 w-60 rounded-lg h-20">
                AVAILABLE
              </button>
              <button className="px-4 py-2 font-bold text-xl text-white bg-assets-200 w-60 hover:bg-indigo-400 rounded-lg">
                BOOK
              </button>
            </div>
            <div className="mt-8 flex  ">
              <button className="px-4 py-2 font-bold text-xl text-assets-200 w-60 h-20 rounded-lg border hover:bg-gray-100 ">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>

       <AssetBookingRating />
      <AssetReview />
      <Footer />
      </React.Fragment>
    ) : (
      <Loading />
    );
  }
}


export default Asset;
