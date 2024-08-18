import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function BattleContext2() {
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
      id='battle'
      className='h-[100vh] pt-[28px] bg-primaryBgColor relative'
    >
      <h2
        className='context-title w-full text-center'
        style={{
          fontSize: '28px',
          fontWeight: 700,
          lineHeight: 1.4,
          textAlign: 'center',
          textTransform: 'uppercase',
          textShadow:
            '0.04419417em 0.04419417em 0em rgba(39, 34, 27, 0.400000)',
        }}
      >
        <span className='relative' style={{ color: '#fcde6e' }}>
          CÁC ĐỢT&nbsp;
          <span className='absolute -bottom-3 right-[2px] 3xl:right-1 h-[5px] w-[50px] bg-yellow'></span>
        </span>
        <span className='relative'>
          TẤN CÔNG
          <span className='absolute -bottom-3 -left-[2px] 3xl:-left-1 h-[5px] w-[50px] bg-black'></span>
        </span>
      </h2>
      <div className='context-content' ref={leftSideRef}>
        <div
          className='left-side min-w-full'
          ref={leftSideRef}
          style={{
            backgroundImage: `url('/images/battle/dot2.webp')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
          }}
        >
          <div className='context-content-title top-28 h-28' ref={leftSideRef}>
            <span
              className='uppercase'
              style={{
                fontSize: '28px',
              }}
            >
              Đợt tấn công thứ hai
            </span>
            <br />
            <span
              style={{
                display: 'inline-block',
                fontSize: '20px',
                marginTop: '4px',
              }}
            >
              30/03/1954 - 30/04/1954
            </span>
          </div>

          <div
            ref={leftSideRef}
            className='context-content-title top-80 h-48 max-w-96'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: 6,
            }}
          >
            <span
              className='uppercase'
              style={{
                fontSize: '28px',
              }}
            >
              Kết quả
            </span>
            <br />
            <br />
            <ul className='list-disc pl-6 space-y-2 font-normal'>
              <li>Loại khỏi vòng chiến đấu khoảng 5.000 tên địch</li>
              <li>Khống chế được phần lớn điểm cao phía Đông</li>
              <li>Kiểm soát sân bay Mường Thanh, hạn chế tiếp viện của địch</li>
            </ul>
          </div>
        </div>

        <div className='absolute pt-[100px] pl-[750px]' ref={rightSideRef}>
          <section className='space-y-9 bg-yellow-50 font-sans mt-4 pr-8'>
            <div className='bg-yellow-500 text-black p-6 rounded-md shadow-md bg-rgbaBgColor'>
              <h2 className='text-lg font-bold'>30/03/1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                <li>18 giờ, quân ta mở màn đợt tiến công thứ hai</li>
                <li>
                  Tiêu diệt hoàn toàn 3 đồn số 1, 2, 4, làm chủ trên mặt đồn số
                  5
                </li>
              </ul>
              <br />
              <h2 className='text-lg font-bold'>31/03/1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                <li>Đánh bại các cuộc phản kích của địch lên đồn số 2</li>
              </ul>
              <br />
              <h2 className='text-lg font-bold'>11/04/1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                <li>Trung đoàn 98 tiến công cứ điểm C1 lần thứ hai</li>
              </ul>
              <br />
              <h2 className='text-lg font-bold'>14/04/1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                <li>
                  Ta tấn công sân bay Mường Thanh, tiêu diệt một đại đội của
                  địch
                </li>
              </ul>
              <br />
              <h2 className='text-lg font-bold'>22/04/1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                <li>
                  Quân ta bất ngờ tấn công vị trí 206 (Huguette 1) và tiêu diệt
                  hoàn toàn vị trí này
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
