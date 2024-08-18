import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Tactic2() {
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
      id='tactic'
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
          ĐÁNH CHẮC&nbsp;
          <span className='absolute -bottom-3 right-[2px] 3xl:right-1 h-[5px] w-[50px] bg-yellow'></span>
        </span>
        <span className='relative'>
          TIẾN CHẮC
          <span className='absolute -bottom-3 -left-[2px] 3xl:-left-1 h-[5px] w-[50px] bg-black'></span>
        </span>
      </h2>
      <div className='context-content' ref={leftSideRef}>
        <div
          className='left-side min-w-full'
          style={{
            backgroundImage: `url('/images/battle/keophao.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
          }}
        />

        <div className='absolute pt-[100px] pl-[700px]' ref={rightSideRef}>
          <section className='space-y-9 bg-yellow-50 font-sans mt-4 pr-24'>
            <div className='bg-yellow-500 text-black p-6 rounded-md shadow-md bg-rgbaBgColor backdrop-blur-sm'>
              <span
                className='uppercase'
                style={{
                  fontSize: '24px',
                }}
              >
                Tại sao lại chọn đánh chắc, tiến chắc?
              </span>
              <h2 className='text-lg font-bold'>13-03-1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                <li>
                  Đúng 8 giờ sáng, Bộ đội ta bắn cháy hai chiếc máy bay Dakota
                  của quân Pháp tại sân bay Mường Thanh
                </li>
                <li>
                  17 giờ 5 phút, quân ta đồng loạt tấn công các cứ điểm Him Lam
                </li>
              </ul>
              <br />
              <h2 className='text-lg font-bold'>14-03-1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                <li>7 giờ 30 phút, quân Pháp phản công ở Him Lam bất thành</li>
                <li>16 giờ 45 phút, quân ta nổ súng đánh đồi Độc Lập</li>
              </ul>
              <br />
              <h2 className='text-lg font-bold'>15-03-1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                <li>
                  6 giờ 30 phút, lá cờ <strong>Quyết chiến quyết thắng</strong>{' '}
                  được cắm trên đồi Độc Lập
                </li>
                <li>
                  12 giờ 45 phút, trung tá Charles Piroth (Jean Charles Clément
                  Piroth) tự sát
                </li>
                <li>
                  Quân Pháp tổ chức phản công tái chiếm đồi Độc Lập nhưng đều bị
                  đánh lui
                </li>
              </ul>
              <br />
              <h2 className='text-lg font-bold'>17-03-1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                <li>Quân Pháp ở Bản Kéo sợ hãi bỏ chạy</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
