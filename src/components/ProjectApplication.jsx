import React from "react";

function ProjectApplication() {
  return (
    <div className="mt-20 mx-10 mb-32">
      <h1 className="text-3xl text-assets-100 font-bold  font-serif">
        Apply for the Vacant Role
      </h1>
      <div className="flex justify-center items-center mt-10">
        <div className="rounded-lg w-[700px] xl:w-[800px] border shadow-2xl">
          <div className="flex flex-col mt-10">
            <div className="px-6 flex space-x-4 ">
              <input
                className="focus:outline-none border rounded-lg w-3/5 p-2 placeholder:italic "
                type="text"
                name=""
                id=""
                placeholder="Your Name"
              />
              <input
                className="focus:outline-none border rounded-lg w-2/5 p-2 placeholder:italic "
                type="text"
                name=""
                id=""
                placeholder="Role to apply"
              />
            </div>
            <div className="px-6 mt-2 mr-4">
              <input
                className="focus:outline-none border rounded-lg w-3/5 p-2 placeholder:italic "
                type="text"
                name=""
                id=""
                placeholder="GitHub profile"
              />
              
            </div>
        
            <div className="px-6 mb-2 mt-2">
              <textarea
                id="message"
                rows="6"
                class=" p-2.5 w-full rounded-lg border focus:outline-none placeholder:italic "
                placeholder="What you can offer"
              ></textarea>
              
            </div>
          </div>
          
          
          <div className="flex justify-center mb-8">
            <button className="bg-assets-200 hover:bg-indigo-400 px-10 py-3 rounded-lg text-white font-bold text-xl">
              APPLY TO COLLAB
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectApplication;
