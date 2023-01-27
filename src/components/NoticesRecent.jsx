import React from "react";

function NoticesRecent(props) {
  return (
    <React.Fragment>
      <div className="rounded-xl border mx-10 shadow-2xl">
        <div className="flex flex-col">
          <div>
            <h1 className="text-2xl font-bold font-serif mt-12 px-4 text-assets-100">
              {props.title}
            </h1>
          </div>

          {props.notices.map((notice, index) => {
            if (index > props.start && index < props.end)
              return (
                <div className="flex flex-col p-4 mb-[24px]">
                  <h1 className="font-serif hover:text-indigo-400 cursor-pointer text-assets-100 font-bold text-xl">
                    {notice.heading}
                  </h1>

                  <div className="flex justify-between mt-2">
                    <p className="text-sm text-gray-500">Date: {notice.date}</p>
                  </div>
                </div>
              );

            return null;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default NoticesRecent;
