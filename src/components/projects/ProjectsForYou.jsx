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

function ProjectsForYou({
  projects,
  onClickAddProject,
  webdev,
  appdev,
  ds,
  ai,
}) {
  return (
    <React.Fragment>
      <div>
        <h1 className="mt-12 font-bold font-serif text-3xl ml-16 text-assets-100 mb-8">
          Projects For You
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
            delay: 1000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
        >
          {projects.map((project, index) => {
            if (index < 6)
              return (
                <SwiperSlide>
                  <AvailableProjects
                    className="m-11"
                    key={project._id}
                    project={project}
                  />
                </SwiperSlide>
              );
            return null;
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
        <PostProject onClickAddProject={onClickAddProject} />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default ProjectsForYou;
