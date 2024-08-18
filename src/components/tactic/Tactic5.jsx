import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export default function Tactic5() {
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
      {language === 'vi' ? (
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
            Phương châm&nbsp;
            <span className='absolute -bottom-3 right-[2px] 3xl:right-1 h-[5px] w-[50px] bg-yellow'></span>
          </span>
          <span className='relative'>
            tác chiến
            <span className='absolute -bottom-3 -left-[2px] 3xl:-left-1 h-[5px] w-[50px] bg-black'></span>
          </span>
        </h2>
      ) : (
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
            作戦&nbsp;
            <span className='absolute -bottom-3 right-[2px] 3xl:right-1 h-[5px] w-[50px] bg-yellow'></span>
          </span>
          <span className='relative'>
            方針
            <span className='absolute -bottom-3 -left-[2px] 3xl:-left-1 h-[5px] w-[50px] bg-black'></span>
          </span>
        </h2>
      )}

      <div className='context-content' ref={leftSideRef}>
        <div
          className='left-side min-w-full'
          style={{
            backgroundImage: `url('/images/battle/trandia.png')`,
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
                    Thay đổi phương châm tác chiến.
                  </p>
                  Chuyển sang phương châm "đánh chắc, tiến chắc", bố trí lại lực
                  lượng, quân ta chiếm lĩnh những vị trí trên cao xung quanh
                  lòng chảo Điện Biên. Xây dựng giao thông hào, gặm nhấm, cô lập
                  dần “con nhím thép”
                </p>
              ) : (
                <p className='list-disc italic'>
                  <p className='text-3xl mb-2'>戦闘のモットーを変更します。</p>
                  「断固とした戦い、着実な前進」のモットーに切り替え、部隊を再配置し、我が軍はディエンビエン盆地周辺の高い位置を占領した。塹壕を築き、かじって、「鋼鉄ハリネズミ」を徐々に隔離してください。
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
