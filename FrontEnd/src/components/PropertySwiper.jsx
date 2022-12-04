import React, { useEffect, useState } from "react";

// PACKAGES
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper";

// STYLES
import "../vendor/swiper-bundle.min.css";
import "../styles/singlePropSlides.css";

SwiperCore.use([Navigation, Thumbs]);

// Found on 'SingleProperty' page
const PropertySwiper = ({ images }) => {
  const [propertyImages, setPropertyImages] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    images.forEach((each) => propertyImages.push(each));
  }, [images, propertyImages]);

  return (
    <>
      <Swiper
        id="main"
        style={{ width: "100%" }}
        thumbs={{ swiper: thumbsSwiper }}
        speed={500}
        navigation
        slidesPerView={1}
      >
        {propertyImages &&
          propertyImages.map((each, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={each} alt={`slide`} style={{ width: "100%" }} />
              </SwiperSlide>
            );
          })}
      </Swiper>

      <Swiper
        id="thumbs"
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={4}
      >
        {propertyImages.map((each, index) => {
          return (
            <SwiperSlide key={`slide - ${index}`}>
              <img
                src={each}
                alt={`slide-${index}`}
                style={{ width: "100%" }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default PropertySwiper;
