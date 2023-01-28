import React from "react";

import AvailableProjects from "./AvailableProjects";
import ExploreWebDev from "./explore/ExploreWebDev";
import ExploreAppDev from "./explore/ExploreAppDev";
import ExploreAR from "./explore/ExploreAR";
import ExploreDS from "./explore/ExploreDS";
import PostProject from "./PostProject";
import Footer from "../common/Footer";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ExploreOther from "./explore/ExploreOther";

function ProjectsForYou({
  onClickAddProject,
  yourProject,
  webdev,
  appdev,
  ds,
  ai,
  other,
}) {
  return (
    <React.Fragment>
      <div>
        <h1 className="mt-12 font-bold font-serif text-3xl ml-16 text-assets-100 mb-8">
          Your Projects
        </h1>
      </div>
      <div className="p-4">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
        >
          {yourProject.map((project) => {
            return (
              <SwiperSlide key={project._id}>
                <AvailableProjects
                  className="m-11"
                  project={project}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <h2 className="mt-20 text-3xl font-bold text-assets-100 ml-16 font-serif">
        EXPLORE BY CATEGORIES
      </h2>
      <div id="explore-projects">
        <ExploreWebDev webdev={webdev} />
        <ExploreAppDev appdev={appdev} />
        <ExploreAR ai={ai} />
        <ExploreDS ds={ds} />
        <ExploreOther other={other} />
        <PostProject onClickAddProject={onClickAddProject} />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default ProjectsForYou;
