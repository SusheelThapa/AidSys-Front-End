import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ studentName }) => {
  const navigate = useNavigate();

  const handleStudentName = () => {
    setTimeout(() => {
      localStorage.clear();

      navigate("/login");
    }, 500);
  };

  return (
    <div className="flex bg-gradient-to-l from-purple-500 to-indigo-500 h-20">
      <p className="mx-8 font-bold text-white bg-transparent font-serif text-2xl mt-4">
        AidSys
      </p>
      <div className="flex space-x-10 mx-auto bg-transparent items-center">
        <button className="bg-transparent text-yellow-400 hover:font-bold hover:text-yellow-600">
          <Link to={"/"}>Home</Link>
        </button>
        <button className="bg-transparent text-yellow-400 hover:font-bold hover:text-yellow-600">
          <Link to={"/assets"}>Assets</Link>
        </button>
        <button className="bg-transparent text-yellow-400 hover:font-bold hover:text-yellow-600">
          <Link>Notice Board</Link>
        </button>
        <button className="bg-transparent text-yellow-400 hover:font-bold hover:text-yellow-600">
          <Link>User</Link>
        </button>
      </div>
      <div className="bg-transparent my-4 mx-8">
        <button
          onClick={handleStudentName}
          className="bg-transparent font-medium py-1 px-4 border text-yellow-400 hover:font-bold "
        >
          {studentName}
        </button>
      </div>
    </div>
  );
};

export default Header;
