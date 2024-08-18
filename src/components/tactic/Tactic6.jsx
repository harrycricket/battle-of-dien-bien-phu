import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export default function Tactic6() {
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
            backgroundImage: `url('/images/battle/concui.png')`,
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
                  <p className='text-3xl mb-2'>Sáng tạo trong các lối đánh</p>
                  Các chiến sĩ đã có sáng kiến cuốn rơm thành những con cúi lớn
                  để ngụy trang khi đào giao thông hào và tránh những đường đạn
                  bắn thẳng của địch.
                </p>
              ) : (
                <p className='list-disc italic'>
                  <p className='text-3xl mb-2'>戦闘スタイルにおける創造性</p>
                  兵士たちは、塹壕を掘るときにカモフラージュし、敵の直接弾丸を避けるために、わらを丸めて大きな弓を作る率先力を持っていました。
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
