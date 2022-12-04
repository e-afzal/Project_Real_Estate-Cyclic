import React, { useEffect, useState } from "react";

// PACKAGES
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// STYLES
import "../vendor/swiper-bundle.min.css";
import "../styles/singlePropSlides.css";

SwiperCore.use([Navigation]);

// Found on 'Home' page
const ProjectSwiper = ({ images }) => {
  const [projectImages, setProjectImages] = useState([]);
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    images.forEach((each) => projectImages.push(each));
    setCarousel(projectImages);
  }, [images, projectImages]);

  return (
    <>
      <Swiper id="main" navigation speed={500} slidesPerView={1} loop>
        {carousel &&
          carousel.map((each, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{
                  // height: "75vh",
                  maxWidth: "100%",
                }}
              >
                <img
                  src={each}
                  alt={`slide`}
                  style={{
                    maxWidth: "100%",
                  }}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default ProjectSwiper;
