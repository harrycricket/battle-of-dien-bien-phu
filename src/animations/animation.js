import { gsap } from "gsap";

export const preLoaderAnim = (onComplete) => {
  const texts = document.querySelectorAll(".texts-container span");
  const preloader = document.querySelector(".preloader");

  gsap
    .timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    })
    .fromTo(
      texts,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.06,
        ease: "power3.in",
      }
    )
    .to({}, { duration: 0.7 })
    .to(preloader, {
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        preloader.style.display = "none";
      },
    });
};
