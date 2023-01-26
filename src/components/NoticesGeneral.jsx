import React from "react";
import notices from "../assets/img/notices.png";
function NoticesGeneral() {
  return (
    <div className="mx-10">
      <div className="flex shadow-2xl border rounded-xl">
        <div>
          <img className="h-full rounded-l-xl" src={notices} alt="notices" />
        </div>
        <div className="flex flex-col justify-center px-4 py-2">
          <h1 className="text-2xl cursor-pointer text-assets-100 font-bold font-serif hover:text-indigo-400">
            Notice Regarding Something
          </h1>
          <div className="flex justify-between mt-2">
            <p className="text-sm text-gray-500">Date: Date</p>
            <p className="text-sm text-gray-500">Someone from the office</p>
          </div>
          <p className="text-sm mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            aut optio, asperiores numquam atque illo dicta soluta repellat
            mollitia, voluptates, obcaecati quis aperiam alias sint! Sequi at
            autem reprehenderit dolorem?
          </p>
          <div className="flex justify-end mt-4">
            <button className="font-bold text-assets-100 underline hover:text-indigo-400">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticesGeneral;
