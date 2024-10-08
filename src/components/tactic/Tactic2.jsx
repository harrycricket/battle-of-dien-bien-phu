import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export default function Tactic2() {
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
            backgroundImage: `url('/images/battle/keophao.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
          }}
        />

        <div className='absolute pt-[100px] pl-[650px]' ref={rightSideRef}>
          <section className='space-y-9 bg-yellow-50 font-sans mt-24 pr-36'>
            <div className='bg-yellow-500 text-black p-6 rounded-md shadow-md bg-rgbaBgColor backdrop-blur-sm text-2xl font-medium'>
              {language === 'vi' ? (
                <span
                  style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                  }}
                >
                  Đánh chắc, tiến chắc
                </span>
              ) : (
                <span
                  style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                  }}
                >
                  しっかり戦って、しっかり進め
                </span>
              )}
              <br />
              {language === 'vi' ? (
                <ul className='list-disc pl-10 space-y-2 italic'>
                  <li>
                    Bao vây cứ điểm của địch, dùng hệ thống hầm hào như một
                    chiếc khiên bảo vệ bộ đội trước đạn pháo của kẻ thù, từng
                    bước tiến vào lòng địch
                  </li>
                  <li>
                    Tiến công từng vị trí một, vây chặt địch, cắt tiếp tế của
                    địch, buộc địch rơi vào tình thế khó khăn
                  </li>
                  <li>
                    Trong đêm ngày 25/1, Đại tướng Võ Nguyên Giáp đã đổi phương
                    châm tác chiến thành “đánh chắc, tiến chắc”
                  </li>
                </ul>
              ) : (
                <ul className='list-disc pl-10 space-y-2 italic'>
                  <li>
                    敵の基地を取り囲み、塹壕システムを盾として使用して敵の大砲から兵士を守り、敵の中心部に一歩ずつ前進してください。
                  </li>
                  <li>
                    各陣地を一つずつ攻撃し、敵を包囲して補給を遮断し、困難な状況に追い込む
                  </li>
                  <li>
                    1月25日夜、ボー・グエン・ザップ将軍は戦闘のモットーを「堅実に戦い、堅実に前進する」に変更した
                  </li>
                </ul>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
