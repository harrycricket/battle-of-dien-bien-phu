import React, { useState, useEffect, useRef } from 'react';
import '../victory.css';
import { background, leftMan, midMan, rightMan, front, light } from "../assets";
import { motion } from 'framer-motion';

export const Victory = () => {
  const [xValue, setxValue] = useState(0);
  const [yValue, setyValue] = useState(0);
  const [rotateDegree, setRotateDegree] = useState(0);
  const [isMouseInside, setIsMouseInside] = useState(false); // State to track mouse inside
  const parallaxRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {

      setxValue(e.clientX - window.innerWidth / 2);
      setyValue(e.clientY - window.innerHeight / 2);

      setRotateDegree((xValue / (window.innerWidth / 2)) * 20);
      // if (!isMouseInside) return; // Only update if mouse is inside the element

      handlerWinSize();
      parallaxRefs.current.forEach((el) => {
        let speedx = el.dataset.speedx || 0;
        let speedy = el.dataset.speedy || 0;
        let speedz = el.dataset.speedz || 0;
        let rotation = el.dataset.rotation || 1;

        let isInLeft =
          parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

        el.style.transform = `rotateY(${rotateDegree * rotation}deg) translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))
         perspective(2300px) translateZ(${zValue * speedz}px)`;
      });
    };

    const handleMouseEnter = () => setIsMouseInside(true); // Mouse enters the image
    const handleMouseLeave = () => setIsMouseInside(false); // Mouse leaves the image

    const imageElement = parallaxRefs.current[5]; // The image to be tracked
    const [imgRects] = imageElement.getClientRects();
    

    // imageElement.addEventListener('mouseover', evt => {
    //   const distanceLeft = Math.abs(evt.clientX - imgRects.left);
    //   const distanceRight = Math.abs(evt.clientX - imgRects.right);
    //   if (distanceLeft < distanceRight) {
    //     // showLeftArrow = true;
    //     // showRightArrow = false;
    //     console.log('left');
    //   } else {
    //     // showLeftArrow = false;
    //     // showRightArrow = true;
    //     console.log('right');
    //   }
    // });
    // imageElement.addEventListener('mouseout', handleMouseLeave);

    // console.log("x ", xValue);
    // console.log("y", yValue);
    // console.log("Is in image", isMouseInside);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (imageElement) {
        imageElement.removeEventListener('mouseenter', handleMouseEnter);
        imageElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [xValue, yValue, isMouseInside]);

  const handlerWinSize = () => {
    const main = document.querySelector("main");
    if (window.innerWidth >= 725) {
      main.style.maxHeight = `${window.innerWidth * 0.5}px`;
    } else {
      main.style.maxHeight = `${window.innerWidth * 0.5}px`;
    }
  };

  return (
    <>
      <main id='victory' className='victory-main'>
        <div className='absolute top-2 z-20 left-[50.75%] 3xl:left-[51.2%] transform -translate-x-1/2'>
          <h1 className="text-xl 3xl:text-[30px] font-semibold mb-6">
            <span className="text-white relative">
              CHIẾN THẮNG&nbsp;
              <span className="absolute -bottom-1 right-[2px] 3xl:right-1 h-[2.5px] w-[40px] bg-white"></span>
            </span>
            <span className="text-yellow relative">
              ĐIỆN BIÊN PHỦ
              <span className="absolute -bottom-1 -left-[2px] 3xl:-left-1 h-[2.5px] w-[40px] bg-black"></span>
            </span>
          </h1>
        </div>

        <img
          ref={(el) => (parallaxRefs.current[0] = el)}
          src={background}
          alt=""
          data-speedx="0"
          data-speedy="0.03"
          data-speedz="0.01"
          data-rotation="0.01"
          className="parallax bg-img w-screen h-screen"
        />
        <img
          ref={(el) => (parallaxRefs.current[1] = el)}
          src={leftMan}
          alt=""
          data-speedx="0.15"
          data-speedy="0.08"
          data-speedz="0.1"
          data-rotation="1"
          className="parallax left-man"
        />
        <div className='text parallax'>
          <h2>7/5/1954</h2>
          <h1>Chiến Thắng Điện Biên Phủ</h1>
        </div>
        <img
          ref={(el) => (parallaxRefs.current[2] = el)}
          src={midMan}
          alt=""
          data-speedx="0.1"
          data-speedy="0.05"
          data-speedz="0.2"
          data-rotation="1"
          className="parallax mid-man"
        />
        <img
          ref={(el) => (parallaxRefs.current[3] = el)}
          src={rightMan}
          alt=""
          data-speedx="0.05"
          data-speedy="0.03"
          data-speedz="0.1"
          data-rotation="1"
          className="parallax right-man"
        />
        <img
          ref={(el) => (parallaxRefs.current[4] = el)}
          src={front}
          alt=""
          data-speedx="0.0"
          data-speedy="0.02"
          data-speedz="0.01"
          data-rotation="0.01"
          className="parallax front"
        />
        <img
          ref={(el) => (parallaxRefs.current[5] = el)}
          src={light}
          alt=""
          className="light w-screen h-screen"
        />
      </main>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-50'>
        <a href='#battle'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-primaryBgColor flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-primaryBgColor mb-1'
            />
          </div>
        </a>
      </div>
    </>
  );
};
