import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export default function BattleContext3() {
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
            backgroundImage: `url('/images/battle/dot3.jpg')`,
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
                Đợt tấn công thứ ba
              </span>
            ) : (
              <span
                className='uppercase'
                style={{
                  fontSize: '28px',
                }}
              >
                3回目の攻撃
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
              01/05/1954 - 07/05/1954
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
                <li>Chiếm được toàn bộ khu vực Điện Biên Phủ</li>
                <li>Đập đổ kế hoạch Navarre</li>
                <li>Bắt sống De Castries và toàn bộ quân Pháp chạy trốn</li>
              </ul>
            ) : (
              <ul className='list-disc pl-6 space-y-2 font-normal'>
                <li>ディエンビエンフー全域を占領</li>
                <li>ナバラ計画を破壊する</li>
                <li>デ・カストリーを生け捕り、フランス軍全員が逃亡する</li>
              </ul>
            )}
          </div>
        </div>

        <div className='absolute pt-[100px] pl-[750px]' ref={rightSideRef}>
          <section className='space-y-9 bg-yellow-50 font-sans pr-8'>
            <div className='bg-yellow-500 text-black p-6 rounded-md shadow-md bg-rgbaBgColor backdrop-blur-sm'>
              <h2 className='text-lg font-bold'>01/05/1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                {language === 'vi' ? (
                  <li>
                    17 giờ chiều, quân ta tấn công vào cứ điểm Hồng Cúm, làm tê
                    liệt cụm pháo địch
                  </li>
                ) : (
                  <li>
                    午後5時、我が軍はホンカム基地を攻撃し、敵の砲群を麻痺させた。
                  </li>
                )}
              </ul>
              <br />
              <h2 className='text-lg font-bold'>02/05/1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                {language === 'vi' ? (
                  <li>
                    2 giờ sáng, Trung đoàn 209 tiêu diệt trung tâm đề kháng
                    Dominique
                  </li>
                ) : (
                  <li>午前2時、第209連隊はドミニク抵抗センターを破壊した。</li>
                )}
              </ul>
              <br />
              <h2 className='text-lg font-bold'>03/05/1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                {language === 'vi' ? (
                  <li>
                    Chiếm 4 cứ điểm: C1, 505, 505A ở phía Đông và 311A ở phía
                    Tây
                  </li>
                ) : (
                  <li>東のC1、505、505Aと西の311Aの4拠点を占有</li>
                )}
              </ul>
              <br />
              <h2 className='text-lg font-bold'>04/05/1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                {language === 'vi' ? (
                  <li>
                    Tiêu diệt 311A, Đại đoàn 308 tiếp tục đánh 311B (Huguette 4)
                  </li>
                ) : (
                  <li>
                    311A を破壊し、第 308 中隊は 311B を攻撃し続ける (Huguette
                    4)
                  </li>
                )}
              </ul>
              <br />
              <h2 className='text-lg font-bold'>05/05/1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                {language === 'vi' ? (
                  <li>
                    Trung đoàn 174 đặt gần 1 tấn bộc phá trong đường hầm đồi A1
                  </li>
                ) : (
                  <li>連隊174はA1丘陵トンネルに約1トンの爆発物を設置した</li>
                )}
              </ul>
              <br />
              <h2 className='text-lg font-bold'>06/05/1954</h2>
              {language === 'vi' ? (
                <ul className='list-disc pl-10 space-y-2 italic'>
                  <li>
                    Ta tấn công vào đồi A1, C2, cứ điểm 506, Bắc Mường Thanh, cứ
                    điểm 310, Tây Mường Thanh
                  </li>
                  <li>
                    Tiêu diệt 506 (Eliane 10), chiếm cứ điểm 311 (Hugaette F)
                  </li>
                </ul>
              ) : (
                <ul className='list-disc pl-10 space-y-2 italic'>
                  <li>
                    私たちは丘 A1、C2、北ムオンタンの基地
                    506、西ムオンタンの基地 310 を攻撃しました。
                  </li>
                  <li>
                    506 (エリアーヌ 10) を破壊し、基地 311 (ユガエット F)
                    を占領する
                  </li>
                </ul>
              )}
              <br />
              <h2 className='text-lg font-bold'>07/05/1954</h2>
              {language === 'vi' ? (
                <ul className='list-disc pl-10 space-y-2 italic'>
                  <li>
                    17 giờ 30 phút, bắt sống De Castries và toàn bộ cơ quan tham
                    mưu của hắn
                  </li>
                  <li>
                    Quân ta tiếp tục truy kích tới 24 giờ, bắt sống được toàn bộ
                    quân địch
                  </li>
                </ul>
              ) : (
                <ul className='list-disc pl-10 space-y-2 italic'>
                  <li>
                    午後5時30分、デ・カストリーズとそのスタッフ全員が捕らえられた
                  </li>
                  <li>
                    私たちの軍隊は最長24時間追跡を続け、敵兵士全員を捕らえました。
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
