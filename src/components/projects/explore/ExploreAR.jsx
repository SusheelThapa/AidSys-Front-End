import React from "react";
import NotAvailableProjects from "../NotAvailableProjects";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ExploreAR({ projects, start, end }) {
  return (
    <React.Fragment>
      <div>
        <h1 className="mt-20 font-bold font-serif text-2xl ml-16 text-assets-100 mb-8">
          AR PROJECTS
        </h1>

        <div className="p-4 flex space-x-4 xl:space-x-12">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation,Autoplay]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              reverseDirection:true
            }}
          >
            {projects.map((project, index) => {
              if (index > start && index < end)
                return (
                  <SwiperSlide>
                    <NotAvailableProjects key={project._id} project={project} />
                  </SwiperSlide>
                );
              return null;
            })}
          </Swiper>

        </div>
      </div>
    </React.Fragment>
  );
}

export default ExploreAR;
