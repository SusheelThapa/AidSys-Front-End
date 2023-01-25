import React, { Component, useState } from "react";
import Header from "./common/Header";

// import { getStudentDetail, getTokenData } from "../services/request";
// import { doesTokenExist, readToken } from "../services/token";
// import Loading from "./Loading";
import Laptop from "../assets/img/laptop.png";
import LaptopTwo from "../assets/img/laptop2.png";
import LaptopThree from "../assets/img/laptop3.png";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import ProjectTeam from "./ProjectTeam";
import ProjectVacancy from "./ProjectVacancy";
import ProjectApplication from "./ProjectApplication";
import Footer from "./common/Footer";
// class Project extends Component {
//   state = { student: null };

//   componentDidMount() {
//     if (doesTokenExist()) {
//       getTokenData(readToken()).then((res) => {
//         getStudentDetail(res.data.studentID).then((studentdata) => {
//           if (studentdata.success) {
//             const student = studentdata.student[0];
//             console.log(student);
//             this.setState({ student: student });
//           } else {
//             alert(studentdata.message);
//           }
//         });
//       });
//     } else {
//       /**
//        * TODO: Redirect to login page
//        */
//     }
//   }
//   render() {
//     return this.state.student ? (
//       <React.Fragment>
//         <Header studentName={this.state.student.username.toUpperCase()} />

//       </React.Fragment>
//     ) : (
//       <Loading />
//     );
//   }
// }

const Project = () => {
  const slider = [
    {
      image: Laptop,
    },
    {
      image: LaptopTwo,
    },
    {
      image: LaptopThree,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <>
      <Header />
      <div className="mx-10 my-12">
        <h1 className="text-3xl text-assets-100 font-bold  font-serif">
          Project Name
        </h1>
        <div className="flex space-x-10 2xl:space-x-48">
          <div className="mt-4 w-3/5">
            <p className="text-lg mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non
              quisquam eos illo, dicta dolores quibusdam tenetur? Ut illum
              tempora doloremque quos, voluptatem excepturi quam ipsum nulla aut
              error commodi.
            </p>
            <p className="text-lg mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non
              quisquam eos illo, dicta dolores quibusdam tenetur? Ut illum
              tempora doloremque quos, voluptatem excepturi quam ipsum nulla aut
              error commodi. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Facere, reiciendis!
            </p>
            <p className="text-lg mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non
              quisquam eos illo, dicta dolores quibusdam tenetur? Ut illum
              tempora doloremque quos, voluptatem excepturi quam ipsum nulla aut
              error commodi. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Facere, reiciendis! lorem15
            </p>
            <p className="text-lg mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              laboriosam?class
            </p>
          </div>
          <div className="w-2/5 flex-col flex justify-center">
            <div className="max-w-[600px] relative group rounded-xl">
              <img src={slider[currentIndex].image} alt="" />
              {/* left arrow */}
              <div
                className="absolute top-[40%] bg-white bg-opacity-50 mx-3 cursor-pointer rounded-full -translate-x-0 translate-y-[50] hidden group-hover:block"
                onClick={prevSlide}
              >
                <BsChevronCompactLeft size={60} />
              </div>
              <div
                className="absolute top-[40%] bg-white bg-opacity-50 cursor-pointer rounded-full -translate-x-0 translate-y-[50] right-5 hidden group-hover:block"
                onClick={nextSlide}
              >
                {/* right arrow */}
                <BsChevronCompactRight size={60} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectTeam />
      <ProjectVacancy />
      <ProjectApplication />
      <Footer />
    </>
  );
};

export default Project;
