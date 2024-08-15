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
        stagger: 0.2,
        duration: 0.5,
        ease: "power3.out",
      }
    )
    .to(
      texts,
      {
        opacity: 0,
        y: -50,
        stagger: 0.3,
        duration: 0.5,
        ease: "power3.in",
      },
      "+=1"
    )
    .to(preloader, {
      opacity: 0,
      duration: 0.5,
      ease: "power3.inOut",
      onComplete: () => {
        preloader.style.display = "none";
      },
    });
};
