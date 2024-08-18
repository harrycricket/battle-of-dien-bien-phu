import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export default function BattleContext2() {
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
      id='battle'
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
            CÁC ĐỢT&nbsp;
            <span className='absolute -bottom-3 right-[2px] 3xl:right-1 h-[5px] w-[50px] bg-yellow'></span>
          </span>
          <span className='relative'>
            TẤN CÔNG
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
            攻撃&nbsp;
            <span className='absolute -bottom-3 right-[2px] 3xl:right-1 h-[5px] w-[50px] bg-yellow'></span>
          </span>
          <span className='relative'>
            波
            <span className='absolute -bottom-3 -left-[2px] 3xl:-left-1 h-[5px] w-[50px] bg-black'></span>
          </span>
        </h2>
      )}

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
          <div
            className='context-content-title top-28 h-28 rounded-lg'
            ref={leftSideRef}
          >
            {language === 'vi' ? (
              <span
                className='uppercase'
                style={{
                  fontSize: '28px',
                }}
              >
                Đợt tấn công thứ hai
              </span>
            ) : (
              <span
                className='uppercase'
                style={{
                  fontSize: '28px',
                }}
              >
                2回目の攻撃
              </span>
            )}
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
            className='context-content-title top-80 h-48 max-w-96 backdrop-blur-sm'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: 6,
            }}
          >
            {language === 'vi' ? (
              <span
                className='uppercase'
                style={{
                  fontSize: '28px',
                }}
              >
                Kết quả
              </span>
            ) : (
              <span
                className='uppercase'
                style={{
                  fontSize: '28px',
                }}
              >
                結果
              </span>
            )}
            <br />
            <br />
            {language === 'vi' ? (
              <ul className='list-disc pl-6 space-y-2 font-normal'>
                <li>Loại khỏi vòng chiến đấu khoảng 5.000 tên địch</li>
                <li>Khống chế được phần lớn điểm cao phía Đông</li>
                <li>
                  Kiểm soát sân bay Mường Thanh, hạn chế tiếp viện của địch
                </li>
              </ul>
            ) : (
              <ul className='list-disc pl-6 space-y-2 font-normal'>
                <li>約5,000人の敵を戦闘から排除した</li>
                <li>東部の高地のほとんどを制圧した</li>
                <li>ムオンタン空港を制圧し、敵の増援を制限する</li>
              </ul>
            )}
          </div>
        </div>

        <div className='absolute pt-[100px] pl-[750px]' ref={rightSideRef}>
          <section className='space-y-9 bg-yellow-50 font-sans mt-4 pr-8'>
            <div className='bg-yellow-500 text-black p-6 rounded-md shadow-md bg-rgbaBgColor backdrop-blur-sm'>
              <h2 className='text-lg font-bold'>30/03/1954</h2>
              {language === 'vi' ? (
                <ul className='list-disc pl-10 space-y-2 italic'>
                  <li>18 giờ, quân ta mở màn đợt tiến công thứ hai</li>
                  <li>
                    Tiêu diệt hoàn toàn 3 đồn số 1, 2, 4, làm chủ trên mặt đồn
                    số 5
                  </li>
                </ul>
              ) : (
                <ul className='list-disc pl-10 space-y-2 italic'>
                  <li>午後6時、我が軍は第二次攻撃を開始した。</li>
                  <li>3つのポスト1、2、4を完全に破壊し、ポスト5を占領する</li>
                </ul>
              )}
              <br />
              <h2 className='text-lg font-bold'>31/03/1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                {language === 'vi' ? (
                  <li>Đánh bại các cuộc phản kích của địch lên đồn số 2</li>
                ) : (
                  <li>ステーション番号 2 で敵の反撃を破る</li>
                )}
              </ul>
              <br />
              <h2 className='text-lg font-bold'>11/04/1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                {language === 'vi' ? (
                  <li>Trung đoàn 98 tiến công cứ điểm C1 lần thứ hai</li>
                ) : (
                  <li>第98連隊がC1基地を二度目の攻撃</li>
                )}
              </ul>
              <br />
              <h2 className='text-lg font-bold'>14/04/1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                {language === 'vi' ? (
                  <li>
                    Ta tấn công sân bay Mường Thanh, tiêu diệt một đại đội của
                    địch
                  </li>
                ) : (
                  <li>ムオンタン空港を攻撃し、敵企業を壊滅させた</li>
                )}
              </ul>
              <br />
              <h2 className='text-lg font-bold'>22/04/1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                {language === 'vi' ? (
                  <li>
                    Quân ta bất ngờ tấn công vị trí 206 (Huguette 1) và tiêu
                    diệt hoàn toàn vị trí này
                  </li>
                ) : (
                  <li>
                    我が軍は突然陣地206（ユゲット1）を攻撃し、この陣地を完全に破壊した
                  </li>
                )}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
