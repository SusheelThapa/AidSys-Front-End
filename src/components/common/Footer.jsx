import React from "react";

function Footer() {
  return (
    <div className="bg-gradient-to-l from-purple-500 to-indigo-500 h-56">
      <div className="flex justify-around">
        <div className="mt-8">
          <h1 className="text-3xl text-white font-serif font-bold">AidSys</h1>
        </div>
        <div className="flex space-x-14 mt-8">
          <p className="text-white text-2xl font-bold cursor-pointer ">
            Contact
          </p>
          <p className="text-white text-2xl font-bold cursor-pointer ">
            About Us
          </p>
          <p className="text-white text-2xl font-bold cursor-pointer ">
            Terms and Privacy Policy
          </p>
        </div>
      </div>
      <p className="text-center font-bold text-xl mt-28 text-white">
        &copy; Copyright | AidSys
      </p>
    </div>
  );
}

export default Footer;
