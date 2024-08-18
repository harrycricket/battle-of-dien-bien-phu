import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export default function Tactic4() {
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);
  const language = useSelector((state) => state.language.language);

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
      <div className='context-content' ref={leftSideRef}>
        <div
          className='left-side min-w-full'
          style={{
            backgroundImage: `url('/images/battle/map.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
          }}
        />

        <div className='absolute pt-[100px] pl-[650px]' ref={rightSideRef}>
          <section className='space-y-9 bg-yellow-50 font-sans pt-8 pr-24'>
            <div className='bg-yellow-500 text-black text-center py-3 px-6 rounded-md shadow-md bg-rgbaBgColor backdrop-blur-sm text-2xl font-medium'>
              {language === 'vi' ? (
                <span
                  style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                  }}
                >
                  Nghệ thuật quân sự sáng tạo trong chiến dịch Điện Biên Phủ
                </span>
              ) : (
                <span
                  style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                  }}
                >
                  ディエンビエンフー作戦における創造的な軍事芸術
                </span>
              )}
            </div>
            <div className='bg-yellow-500 text-black p-6 rounded-md shadow-md bg-rgbaBgColor backdrop-blur-sm text-2xl font-medium'>
              {language === 'vi' ? (
                <p className='list-disc italic'>
                  <p className='text-3xl mb-2'>
                    Đường lối chiến tranh nhân dân.
                  </p>
                  Đảng ta huy động được 260.000 dân công phục vụ (tương đương
                  với 14 triệu ngày công), tức 26 vạn người phục vụ cho hơn 5
                  vạn bộ đội.
                </p>
              ) : (
                <p className='list-disc italic'>
                  <p className='text-3xl mb-2'>人民の戦争戦略。</p>
                  わが党は26万人の国民を奉仕に動員（1,400万労働日相当）、つまり26万人が5万人以上の兵士に奉仕した
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
