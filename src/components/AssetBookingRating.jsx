import React from "react";
import Rating from "../assets/img/rating.png";
import { AiOutlineStar } from "react-icons/ai";

function AssetBookingRating({ bookings }) {
  return (
    <div className="mt-32">
      <div className="flex justify-between px-20 space-x-8 xl:space-x-28">
        {/* div for previous bookings */}
        <div className="w-3/5">
          <h2 className="text-3xl text-assets-100 font-bold font-serif">
            PREVIOUS BOOKINGS
          </h2>
          {/*div for booking name  */}
          <div className="flex flex-col space-y-4 p-4 xl:p-40 rounded-xl border shadow-lg mt-8">
            {bookings.map((booking) => {
              const { bookedDate } = booking;
              const { name } = booking.studentID;

              const date = new Date(bookedDate);

              return (
                <div className="flex justify-between hover:shadow-2xl h-20 p-4">
                  <p className="text-2xl text-gray-500">1. {name}</p>
                  <p className="text-2xl text-gray-500">
                    Date: {date.toDateString()}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* div for ratings */}
        <div className="w-2/5">
          <h2 className="text-3xl text-assets-100 font-bold font-serif mx-16 2xl:mx-64">
            RATINGS
          </h2>
          <div className="flex w-fit flex-col mx-auto">
            {/* div for 96% */}
            <div className="p-6 h-80 flex justify-center rounded-xl shadow-lg border mt-8">
              <img className="h-fit w-fit" src={Rating} alt="rating" />
            </div>
            {/* div for stars */}
            <div className="flex mx-auto mt-4 space-x-2">
              <AiOutlineStar size={40} />
              <AiOutlineStar size={40} />
              <AiOutlineStar size={40} />
              <AiOutlineStar size={40} />
              <AiOutlineStar size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetBookingRating;
