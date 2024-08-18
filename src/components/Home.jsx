import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';

const Home = () => {
  const textRef = useRef(null);
  const text3Ref = useRef(null);
  const newTextRef = useRef(null);
  const paragraphRef = useRef(null);
  const fistRef = useRef(null);
  const homeRef = useRef(null);
  const additionalTextRefs = useRef([]);
  const firstTimeRef = useRef(true);
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    const animateHome = () => {
      const chars = textRef.current.querySelectorAll('.char');
      const charsText3 = text3Ref.current.querySelectorAll('.char');
      const paragraphChars = paragraphRef.current.querySelectorAll('.char');
      const additionalTexts = additionalTextRefs.current;
      const newTextChars = newTextRef.current.querySelectorAll('.char');

      const timeline = gsap.timeline();

      timeline.fromTo(
        chars,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          stagger: {
            amount: 0.5,
            from: 'start',
            axis: 'x',
          },
          duration: 0.5,
          ease: 'power2.out',
        },
        firstTimeRef.current ? 7 : 0
      );

      timeline.fromTo(
        charsText3,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          stagger: {
            amount: 0.5,
            from: 'start',
            axis: 'x',
          },
          duration: 0.5,
          ease: 'power2.out',
        },
        firstTimeRef.current ? 7 : 0
      );

      timeline.fromTo(
        paragraphChars,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          stagger: {
            amount: 1.2,
            from: 'start',
            axis: 'x',
          },
          duration: 0.5,
          ease: 'power2.out',
        },
        firstTimeRef.current ? 7.5 : 0.5
      );

      timeline.fromTo(
        fistRef.current,
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1.5, ease: 'power2.out' },
        firstTimeRef.current ? 7 : 0
      );

      additionalTexts.forEach((el, index) => {
        timeline.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: { amount: 0.5, from: 'start' },
            duration: 0.5,
            ease: 'power2.out',
          },
          firstTimeRef.current ? 7 : 0
        );
      });

      timeline.fromTo(
        newTextChars,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: {
            amount: 1,
            from: 'start',
            axis: 'y',
          },
          duration: 2,
          ease: 'power2.out',
        },
        firstTimeRef.current ? 7 : 0
      );
      firstTimeRef.current = false;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateHome();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(homeRef.current);

    return () => observer.disconnect();
  }, []);


  const text1 = language === "vi" ? 'CHIẾN DỊCH' : "作戦";
  const text2 = language === "vi" ? 'ĐIỆN BIÊN PHỦ' : "DIEN BIEN PHU";
  const text3 = language === "vi" ? 'CHIẾN DỊCH ĐIỆN BIÊN PHỦ' : "DIEN BIEN PHU作戦";
  const paragraphText = language === "vi" ? `Chiến thắng Điện Biên Phủ năm 1954 là một mốc son chói lọi trong lịch sử dân tộc, đánh dấu chấm dứt hoàn toàn ách thống trị của thực dân Pháp trên đất nước ta. Dưới sự lãnh đạo của Đại tướng Võ Nguyên giáp đã tạo ra cuộc chiến "lừng lẫy năm châu, chấn động địa cầu" buộc Pháp phải ký Hiệp định Geneva. Đây là một chiến thắng vĩ đại không chỉ của quân đội nhân dân Việt Nam mà còn là của toàn dân tộc, mở ra một thời kỳ mới cho đất nước.` : `1954年のDien Bien Phuの勝利は、我が国の歴史における輝かしい節目であり、フランス植民地支配の完全な終焉を意味します。ヴォ・グエン・ジャップ大将の指導の下で、「世界に轟く、地球を揺るがす戦い」を繰り広げ、フランスにジュネーブ協定に署名させました。これはベトナム人民軍だけでなく、全民族の偉大な勝利であり、国に新たな時代を切り開くものでした。`;

  return (
    <section
      ref={homeRef} // Add reference to the section
      id='home'
      className='min-h-[100vh] bg-PrimaryBgTien flex items-end justify-center relative'
      style={{
        backgroundImage: `url('/fight.png')`,
        backgroundSize: '50% 100%',
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute top-0 left-0 bg-black opacity-50 w-[50vw] h-[100vh]" />
      <div className='absolute top-2 left-[50.75%] 3xl:left-[51.2%] transform -translate-x-1/2'>
        {language === "vi" &&
          <h1 className="text-xl 3xl:text-[30px] font-semibold mb-6">
            <span className="text-white relative">
              CHIẾN DỊCH&nbsp;
              <span className="absolute -bottom-1 right-[2px] 3xl:right-1 h-[2.5px] w-[40px] bg-yellow"></span>
            </span>
            <span className="text-black relative">
              ĐIỆN BIÊN PHỦ
              <span className="absolute -bottom-1 -left-[2px] 3xl:-left-1 h-[2.5px] w-[40px] bg-black"></span>
            </span>
          </h1>}
      </div>

      <div className='absolute top-[5vh] right-[10vw]' ref={newTextRef}>
        <h1 className="font-semibold mb-6">
          <span className="text-black text-base 3xl:text-2xl ps-1 font-extrabold vertical-text relative">
            {text2.split('').map((char, index) => (
              <span key={index} className="char text-black">{char}</span>
            ))}
          </span>
          <span className="text-black text-[90px] 3xl:text-[120px] leading-[90px] font-extrabold vertical-text relative">
            {`1954`.split('').map((char, index) => (
              <span key={index} className="char text-black">{char}</span>
            ))}
          </span>
        </h1>
      </div>



      <div className='absolute top-[33vh] right-[10.49vw] 3xl:right-[9.8vw] 3xl:top-[35vh]'>
        <img
          src="fight-bw.png"
          className="w-32 h-32 3xl:w-36 3xl:h-36 max-w-md mx-auto"
        />
      </div>

      <div className='absolute top-[31vh] left-[19vw] 3xl:left-[16vw] z-10' ref={textRef}>
        {language === "vi" ? <h1 className="text-white text-[55px] 3xl:text-[80px] font-extrabold mb-6">
          {text1.split('').map((char, index) => (
            <span key={index} className="char">
              {char}
            </span>
          ))}
          <br />
          {text2.split('').map((char, index) => (
            <span key={index} className="char">
              {char}
            </span>
          ))}
        </h1> : <h1 className="text-white text-[55px] 3xl:text-[80px] font-extrabold mb-6">
          {text2.split('').map((char, index) => (
            <span key={index} className="char">
              {char}
            </span>
          ))}
          <br />
          {text1.split('').map((char, index) => (
            <span key={index} className="char">
              {char}
            </span>
          ))}
        </h1>}

      </div>

      <div className="flex flex-col md:flex-row items-end justify-center w-full ms-[90px]">
        <div className="flex-1 mb-16 text-white h-full text-center md:text-left">
          <div
            className='ms-10'
            ref={(el) => (additionalTextRefs.current[0] = el)}
          >
            <div className="text-2xl font-extrabold">{text2}</div>
            <div
              className="text-3xl font-extrabold"
              ref={(el) => (additionalTextRefs.current[1] = el)}
            >
              13/3/1954
            </div>
            <div
              className="text-5xl font-extrabold leading-[50px]"
              ref={(el) => (additionalTextRefs.current[2] = el)}
            >
              7/5/1954
            </div>
          </div>
        </div>
        <div className="flex-1 h-full object-center">
          <div className="flex-1 h-full object-center">
            <img
              src="fist.png"
              alt="Fist"
              className="max-h-[100vh] mx-auto object-contain"
              ref={fistRef} // Add reference to the fist image
            />
          </div>
        </div>
        <div className="flex-1 text-black bg-yellow pl-6 pr-6 pb-3 pt-12 rounded-lg shadow-lg">
          <div className={`absolute ${language === "vi" ? "bottom-44" : "bottom-[190px] 3xl:bottom-48"} 3xl:bottom-52 right-0 flex w-auto justify-end gap-4`}>
            <div className="w-[230px] h-[130px] 3xl:w-[270px] 3xl:h-[150px] overflow-hidden rounded-md">
              <ReactPlayer
                url="70Y-DienBienPhu.mp4"
                controls
                width="100%"
                height="100%"
                style={{ borderRadius: '8px' }}
              />
            </div>
            <img
              src="win.jpg"
              alt="Image 1"
              className="w-[230px] h-[130px] 3xl:w-[250px] 3xl:h-[150px] object-cover rounded-md"
              style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div ref={text3Ref}>
            <h2 className="text-2xl 3xl:text-3xl font-bold mb-1">
              {text3.split('').map((char, index) => (
                <span key={index} className="char">
                  {char}
                </span>
              ))}
            </h2>
          </div>
          <p ref={paragraphRef} className='text-base 3xl:text-xl'>
            {paragraphText.split('').map((char, index) => (
              <span key={index} className="char">
                {char}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
