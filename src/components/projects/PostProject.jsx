import React from "react";

function PostProject() {
  return (
    <>
      <div>
        <h1 className="mt-24 font-bold font-serif text-3xl ml-16 text-assets-100 mb-8">
          POST YOUR PROJECT
        </h1>
        <div className="mb-32 mt-16">
          <div className="flex justify-center items-center mt-10">
            <div className="rounded-lg w-[700px] xl:w-[800px] border shadow-2xl">
              <div className="flex flex-col mt-10">
                <div className="px-6 flex space-x-4 ">
                  <input
                    className="focus:outline-none border rounded-lg w-3/5 p-2 placeholder:italic "
                    type="text"
                    name=""
                    id=""
                    placeholder="Name of the project"
                  />
                  <input
                    className="focus:outline-none border rounded-lg w-2/5 p-2 placeholder:italic "
                    type="text"
                    name=""
                    id=""
                    placeholder="Duration of project"
                  />
                </div>
                <div className="px-6 flex space-x-4 mt-8">
                  <input
                    className="focus:outline-none border rounded-lg w-3/5 p-2 placeholder:italic "
                    type="text"
                    name=""
                    id=""
                    placeholder="Team member 1"
                  />
                  <input
                    className="focus:outline-none border rounded-lg w-2/5 p-2 placeholder:italic "
                    type="text"
                    name=""
                    id=""
                    placeholder="Role"
                  />
                </div>
                <div className="px-6 flex space-x-4 mt-2 ">
                  <input
                    className="focus:outline-none border rounded-lg w-3/5 p-2 placeholder:italic "
                    type="text"
                    name=""
                    id=""
                    placeholder="Team member 2"
                  />
                  <input
                    className="focus:outline-none border rounded-lg w-2/5 p-2 placeholder:italic "
                    type="text"
                    name=""
                    id=""
                    placeholder="Role"
                  />
                </div>
                <div className="px-6 flex space-x-4 mt-2 mb-6">
                  <input
                    className="focus:outline-none border rounded-lg w-3/5 p-2 placeholder:italic "
                    type="text"
                    name=""
                    id=""
                    placeholder="Team member 3"
                  />
                  <input
                    className="focus:outline-none border rounded-lg w-2/5 p-2 placeholder:italic "
                    type="text"
                    name=""
                    id=""
                    placeholder="Role"
                  />
                </div>
                <div className="relative px-6 mb-3">
                  <textarea
                    id="message"
                    rows="6"
                    class=" p-2.5 w-full rounded-lg border focus:outline-none placeholder:italic "
                    placeholder="Details about the project"
                  ></textarea>
                  <button className="absolute top-2 right-10 border shadow-xl text-xs py-1 px-3 border-black rounded-lg hover:bg-gray-200">
                    Add image
                  </button>
                </div>
              </div>
              <div className="flex justify-center mb-2">
                <input type="checkbox" />
                <label className="ml-2">Need more team members</label>
              </div>
              <div className="flex justify-center mb-16">
                <input
                  className="focus:outline-none border rounded-lg w-3/5 p-2 placeholder:italic "
                  type="text"
                  name=""
                  id=""
                  placeholder="Needed team member 1"
                />
              </div>
              <div className="flex justify-center mb-8">
                <button className="bg-assets-200 hover:bg-indigo-400 px-10 py-3 rounded-lg text-white font-bold text-xl">
                  POST PROJECT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostProject;
