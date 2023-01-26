import React, { useRef } from "react";

function PostProject({ onClickAddProject }) {
  const name = useRef();
  const memberOne = useRef();
  const memberTwo = useRef();
  const memberThree = useRef();
  const memberFour = useRef();
  const memberOneLink = useRef();
  const memberTwoLink = useRef();
  const memberThreeLink = useRef();
  const memberFourLink = useRef();
  const description = useRef();
  const projectLink = useRef();

  const handleAddProject = () => {
    const project = {
      name: name.current.value,
      description: description.current.value,
      link: projectLink.current.value,
      owner: "",
      catgories: ["Other"],
      teammember: [],
    };

    if (memberOne.current.value !== null) {
      project.teammember.push({
        name: memberOne.current.value,
        link: memberOneLink.current.value,
      });
    }
    if (memberTwo.current.value !== null) {
      project.teammember.push({
        name: memberTwo.current.value,
        link: memberTwoLink.current.value,
      });
    }
    if (memberThree.current.value !== null) {
      project.teammember.push({
        name: memberThree.current.value,
        link: memberThreeLink.current.value,
      });
    }
    if (memberFour.current.value !== null) {
      project.teammember.push({
        name: memberFour.current.value,
        link: memberFourLink.current.value,
      });
    }

    onClickAddProject(project);
  };

  return (
    <React.Fragment>
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
                    ref={name}
                  />
                </div>
                <div className="px-6 flex space-x-4 mt-8">
                  <input
                    className="focus:outline-none border rounded-lg w-3/5 p-2 placeholder:italic "
                    type="text"
                    name=""
                    id=""
                    placeholder="Team member 1"
                    ref={memberOne}
                  />
                  <input
                    className="focus:outline-none border rounded-lg w-2/5 p-2 placeholder:italic "
                    type="text"
                    name=""
                    id=""
                    placeholder="Profile Link"
                    ref={memberOneLink}
                  />
                </div>
                <div className="px-6 flex space-x-4 mt-2 ">
                  <input
                    className="focus:outline-none border rounded-lg w-3/5 p-2 placeholder:italic "
                    type="text"
                    name=""
                    id=""
                    placeholder="Team member 2"
                    ref={memberTwo}
                  />
                  <input
                    className="focus:outline-none border rounded-lg w-2/5 p-2 placeholder:italic "
                    type="text"
                    name=""
                    id=""
                    placeholder="Profile Link"
                    ref={memberTwoLink}
                  />
                </div>
                <div className="px-6 flex space-x-4 mt-2 ">
                  <input
                    className="focus:outline-none border rounded-lg w-3/5 p-2 placeholder:italic "
                    type="text"
                    name=""
                    id=""
                    placeholder="Team member 3"
                    ref={memberThree}
                  />
                  <input
                    className="focus:outline-none border rounded-lg w-2/5 p-2 placeholder:italic "
                    type="text"
                    name=""
                    id=""
                    placeholder="Profile Link"
                    ref={memberThreeLink}
                  />
                </div>
                <div className="px-6 flex space-x-4 mt-2 mb-6">
                  <input
                    className="focus:outline-none border rounded-lg w-3/5 p-2 placeholder:italic "
                    type="text"
                    name=""
                    id=""
                    placeholder="Team member 4"
                    ref={memberFour}
                  />
                  <input
                    className="focus:outline-none border rounded-lg w-2/5 p-2 placeholder:italic "
                    type="text"
                    name=""
                    id=""
                    placeholder="Profile Link"
                    ref={memberFourLink}
                  />
                </div>
                <div className="px-6 flex space-x-4 mt-2 mb-6 ">
                  <input
                    className="focus:outline-none border rounded-lg w-full p-2 placeholder:italic "
                    type="text"
                    name=""
                    id=""
                    placeholder="Project Link"
                    ref={projectLink}
                  />
                </div>
                <div className="relative px-6 mb-3">
                  <textarea
                    id="message"
                    rows="6"
                    className=" p-2.5 w-full rounded-lg border focus:outline-none placeholder:italic "
                    placeholder="Details about the project"
                    ref={description}
                  ></textarea>
                  <button className="absolute top-2 right-10 border shadow-xl text-xs py-1 px-3 border-black rounded-lg hover:bg-gray-200">
                    Add image
                  </button>
                </div>
              </div>

              <div className="flex justify-center mb-8">
                <button
                  onClick={handleAddProject}
                  className="bg-assets-200 hover:bg-indigo-400 px-10 py-3 rounded-lg text-white font-bold text-xl"
                >
                  POST PROJECT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PostProject;
