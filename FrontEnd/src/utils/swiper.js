// PACKAGE
import Swiper from "swiper";
import "../vendor/swiper-bundle.min.css";

//  Initialize Swiper
export function swiper() {
  const swiper = new Swiper(".swiper-container", {
    speed: 900,
    centeredSlides: true,
    slidesPerView: 2,
    spaceBetween: 30,
    grabCursor: true,
    // slidesPerView: "auto",
  });
}

// USEFUL attributes, if needed
//  centeredSlidesBounds: true,
//slidesOffsetBefore: 50,
//slidesOffsetAfter: 50
//   shortSwipes: false,
// preventClicks: true
// scrollbar: {
//   el: ".swiper-scrollbar",
//   hide: true,
//   dragSize: "auto",
//   draggable: true,
// }
