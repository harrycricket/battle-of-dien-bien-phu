import React, { useEffect, useRef } from 'react';
import { signConclusion, tableConclusion, thirdConclusion } from '../../assets';
import { gsap } from 'gsap';
import { useSelector } from 'react-redux';

const Conclusion2 = () => {
  const language = useSelector((state) => state.language.language);
  const isVietNamase = language === 'vi';

  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

  useEffect(() => {
    const animateOnScroll = (element, animation) => {
      if (!element) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animation.play();
            } else {
              animation.reverse();
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
    };

    const leftSideAnimation = gsap.fromTo(
      leftSideRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, paused: true }
    );

    const rightSideAnimation = gsap.fromTo(
      rightSideRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, paused: true }
    );

    animateOnScroll(leftSideRef.current, leftSideAnimation);
    animateOnScroll(rightSideRef.current, rightSideAnimation);
  }, []);

  return (
    <section
      id='summary'
      className='h-[100vh] pt-[90px] bg-primaryBgColor relative bg-cover bg-center'
      style={{ backgroundImage: `url(${thirdConclusion})` }}
    >
      <div className='absolute z-10 top-2 left-[50.75%] 3xl:left-[51.2%] transform -translate-x-1/2'>
        <h1 className='text-4xl 3xl:text-[50px] font-semibold mb-6 text-center'>
          {isVietNamase ? (
            <>
              <span className='text-white relative'>
                TỔNG&nbsp;
                <span className='absolute -bottom-1 right-[2px] 3xl:right-1 h-[2.5px] w-[40px] bg-yellow'></span>
              </span>
              <span className='text-black relative'>
                KẾT
                <span className='absolute -bottom-1 -left-[2px] 3xl:-left-1 h-[2.5px] w-[40px] bg-black'></span>
              </span>
            </>
          ) : (
            <>
              <span className='text-white relative'>
                総&nbsp;
                <span className='absolute -bottom-1 right-[2px] 3xl:right-1 h-[2.5px] w-[40px] bg-yellow'></span>
              </span>
              <span className='text-black relative'>
                括
                <span className='absolute -bottom-1 -left-[2px] 3xl:-left-1 h-[2.5px] w-[40px] bg-black'></span>
              </span>
            </>
          )}
        </h1>
      </div>

      <div className='w-full h-full flex items-center justify-center px-4 animated-text'>
        <div
          className='text-center font-bold max-w-6xl bg-yellow bg-opacity-70 p-6 m-2 rounded-md'
          ref={leftSideRef}
        >
          {isVietNamase ? (
            <>
              <h1 className='text-4xl md:text-8xl lg:text-9xl mb-6 text-black font-extrabold text-shadow-cus'>
                21/7/1954
              </h1>
              <h1 className='text-4xl md:text-8xl lg:text-9xl mb-4 text-black font-extrabold text-shadow-cus uppercase'>
                Cú chốt hạ buộc Pháp phải ngồi vào bàn nghị sự,
                <br />
                ký Hiệp định Geneva
              </h1>
              <h1 className='text-2xl font-medium italic md:text-8xl lg:text-9xl'>
                Chiến thắng đã đánh dấu chấm hết cho sự ngoan cố,
                <br />
                hiếu chiến của thực dân Pháp và đế quốc Mỹ.
                <br />
                Buộc Chính phủ Pháp cùng các bên tham chiến
                <br />
                phải ngồi vào bàn nghị sự, ký Hiệp định Geneva.
              </h1>
            </>
          ) : (
            <>
              <h1 className='text-4xl md:text-8xl lg:text-9xl mb-6 text-black font-extrabold text-shadow-cus'>
                1954年7月21日
              </h1>
              <h1 className='text-4xl md:text-8xl lg:text-9xl mb-4 text-black font-extrabold text-shadow-cus uppercase'>
                フランスが交渉テーブルに着き、
                <br />
                ジュネーブ協定に署名することを強制された
              </h1>
              <h1 className='text-3xl font-medium italic md:text-8xl lg:text-9xl'>
                この勝利は、フランス植民地主義と米帝国主義の
                <br />
                頑固さと好戦性の終焉を告げるものでした。
                <br />
                フランス政府は、他の交戦国と共に
                <br />
                ジュネーブ協定に署名することを余儀なくされました。
              </h1>
            </>
          )}
          <div className='flex w-full text-center justify-center mt-4'>
            <div className='p-2 bg-white mr-4 rounded-md'>
              <img
                src={signConclusion}
                alt='Sign Conclusion'
                className='w-[200px] h-[200px]'
              />
            </div>
            <div className='p-2 bg-white rounded-md'>
              <img
                src={tableConclusion}
                alt='Table Conclusion'
                className='w-[200px] h-[200px]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion2;
