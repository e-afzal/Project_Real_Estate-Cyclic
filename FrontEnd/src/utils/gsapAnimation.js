import { Back, gsap } from "gsap";

export function heroAnimation({ heroImg, heroContent }) {
  // HERO SECTION
  gsap.from(heroContent.current, {
    duration: 2,
    x: -25,
    opacity: 0,
    ease: Back.easeInOut,
  });

  if (window.innerWidth > 768) {
    gsap.from(heroImg.current, {
      duration: 3,
      x: 30,
      opacity: 0,
      ease: Back.easeInOut,
    });
  }
}

export function phoneMobileAnimation(phoneMobileContainer, phoneMobileModel) {
  gsap.from(phoneMobileModel.current, {
    x: 50,
  });
  gsap.to(phoneMobileModel.current, {
    opacity: 1,
    x: 0,
    duration: 5,
    scrollTrigger: {
      trigger: phoneMobileContainer.current,
      start: "5% center",
      end: "55% 40%",
      toggleActions: "reset pause reverse none",
      scrub: true,
    },
  });
}

export function phoneDesktopAnimation(
  phoneContainer,
  phoneContent,
  phoneModel
) {
  gsap.to(phoneContent.current, {
    x: 125,
    opacity: 1,
    scrollTrigger: {
      trigger: phoneContainer.current,
      start: "top center",
      end: "40% center",
      toggleActions: "play pause reverse none",
      scrub: 2,
    },
  });
  gsap.to(phoneModel.current, {
    x: -125,
    opacity: 1,
    scrollTrigger: {
      trigger: phoneContainer.current,
      start: "top center",
      end: "40% center",
      toggleActions: "reset pause reverse none",
      scrub: 2,
    },
  });
}
