import React from "react";
import noticesOne from "../assets/img/notices1.png";
import noticesTwo from "../assets/img/notices2.png";
import noticesThree from "../assets/img/notices3.png";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";

function NoticesImportant() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderImage = [
    {
      image: noticesOne,
    },
    {
      image: noticesTwo,
    },
    {
      image: noticesThree,
    },
  ];
  const sliderText = [
    {
      text: "First Notice Title",
    },
    {
      text: "Second Notice Title",
    },
    {
      text: "Third Notice Title",
    },
  ];
  const sliderParagraph = [
    {
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, facere. Maiores itaque numquam dicta accusamus nemo dolorem quaerat tenetur modi ad, ex officiis, quidem incidunt commodi? Velit, ut voluptates. Dolores!",
    },
    {
      paragraph:
        "Pues...En realidad, no es mucho difícil, no es como mis amigos dicen; dicen que español es taaaaaaaan difícil, son (o están?) equivocado. Si sigue en las clases (que no ellos hacen), la aprendizaje no es un problema.",
    },
    {
      paragraph:
        "Pienso que voy a continuar estudiar español en la escuela secondaria tambien. Me pregunto qué bien mi español va a ser después de tres más años de aprender este idioma. Tal vez/quízas (difference?)",
    },
  ];
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? 2 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === 2;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div>
      <div className="mx-10 mt-10 ">
        <h1 className="text-3xl text-assets-100 font-bold font-serif">
          IMPORTANT NOTICES
        </h1>
        <div className="relative mx-auto flex shadow-2xl border rounded-xl mt-14 max-w-6xl">
          <div>
            <img
              className="h-full rounded-l-xl"
              src={sliderImage[currentIndex].image}
              alt="notices"
            />
          </div>
          <div className="flex flex-col justify-center px-4 py-2">
            <h1 className="text-2xl cursor-pointer text-assets-100 font-bold font-serif hover:text-indigo-400">
              {sliderText[currentIndex].text}
            </h1>
            <div className="flex justify-between mt-2">
              <p className="text-sm text-gray-500">Date: Date</p>
              <p className="text-sm text-gray-500">Someone from the office</p>
            </div>
            <p className="text-sm mt-3">
              {sliderParagraph[currentIndex].paragraph}
            </p>
            <div className="flex justify-end mt-4">
              <button className="font-bold hover:scale-110 duration-200 text-assets-100 underline hover:text-indigo-400">
                Learn more
              </button>
            </div>
          </div>
          {/* left arrow */}
          <div
            className="absolute top-[35%] left-2 xl:-left-28  bg-opacity-25 rounded-full hover:bg-opacity-50 cursor-pointer"
            onClick={prevSlide}
          >
            <BsChevronCompactLeft size={60} />
          </div>
          <div
            className=" absolute top-[35%] right-2 xl:-right-28  bg-opacity-25 rounded-full hover:bg-opacity-50 cursor-pointer"
            onClick={nextSlide}
          >
            {/* right arrow */}
            <BsChevronCompactRight size={60} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticesImportant;
