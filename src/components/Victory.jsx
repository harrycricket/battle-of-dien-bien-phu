import React, { useState, useEffect, useRef } from 'react';
import '../victory.css';
import { background, leftMan, midMan, rightMan, front, light } from "../assets";
import {motion} from 'framer-motion';

export const Victory = () => {
  const [xValue, setxValue] = useState(0);
  const [yValue, setyValue] = useState(0);
  const [rotateDegree, setRotateDegree] = useState(0);
  const parallaxRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setxValue(e.clientX - window.innerWidth / 2);
      setyValue(e.clientY - window.innerHeight / 2);
      setRotateDegree((xValue / (window.innerWidth / 2)) * 20);

      handlerWinSize();
      parallaxRefs.current.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotation = el.dataset.rotation;

        let isInLeft = 
        parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (e.clientX - parseFloat(getComputedStyle(el).left) ) * isInLeft * 0.1;

        el.style.transform = `rotateY(${rotateDegree * rotation}deg) translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))
         perspective(2300px) translateZ(${zValue * speedz}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [xValue, yValue]);

  const handlerWinSize = () => {
    const main = document.querySelector("main");
    if(window.innerWidth >= 725 ){
        main.style.maxHeight = `${window.innerWidth * 0.5}px`;
    }else{
        main.style.maxHeight = `${window.innerWidth * 0.5}px`;
    }
    };




  return (
    <>
    <main>
      <img ref={(el) => parallaxRefs.current[0] = el} src={background} alt="" data-speedx="0" data-speedy="0.03" data-speedz="0.01" data-rotation="0.01" className="parallax bg-img" />
      <img ref={(el) => parallaxRefs.current[1] = el} src={leftMan} alt="" data-speedx="0.15" data-speedy="0.08"  data-speedz="0.1" data-rotation="0.5"  className="parallax left-man" />
      <img ref={(el) => parallaxRefs.current[2] = el} src={midMan} alt="" data-speedx="0.1" data-speedy="0.05"  data-speedz="0.2" data-rotation="0.5"  className="parallax mid-man" />
      <img ref={(el) => parallaxRefs.current[3] = el} src={rightMan} alt="" data-speedx="0.05" data-speedy="0.03"  data-speedz="0.1" data-rotation="0.5"   className="parallax right-man" />
      <img ref={(el) => parallaxRefs.current[4] = el} src={front} alt="" data-speedx="0.0" data-speedy="0.02"  data-speedz="0.01" data-rotation="0.01"   className="parallax front" />
      <img ref={(el) => parallaxRefs.current[5] = el} src={light} alt="" className="light" />
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
