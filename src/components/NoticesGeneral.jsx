import React from "react";
import notices from "../assets/img/notices.png";
function NoticesGeneral({ notice }) {
  return (
    <div className="mx-10">
      <div className="flex shadow-2xl border rounded-xl m-1 mb-5 h-64">
        <div className="flex items-center justify-center ">
          <img className="h-3/4 rounded-l-xl mx-5" src={notices} alt="notices" />
        </div>
        <div className="flex flex-col justify-center px-4 py-2">
          <h1 className="text-2xl cursor-pointer text-assets-100 font-bold font-serif hover:text-indigo-400">
            {notice.heading}
          </h1>
          <div className="flex justify-between mt-2">
            <p className="text-sm text-gray-500">Date: {notice.date}</p>
          </div>
          <p className="text-sm mt-3">{notice.description}</p>
          <div className="flex justify-end mt-4">
            <button className="font-bold hover:scale-110 duration-200 text-assets-100 underline hover:text-indigo-400">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticesGeneral;
