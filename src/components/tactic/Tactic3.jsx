import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export default function Tactic3() {
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
            backgroundImage: `url('/images/battle/VNG.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
          }}
        />

        <div className='absolute pt-[100px] pl-[100px]' ref={rightSideRef}>
          <section className='space-y-9 bg-yellow-50 font-sans mt-16 pr-8'>
            <div className='bg-yellow-500 text-black text-center w-1/2 py-3 rounded-md shadow-md bg-rgbaBgColor backdrop-blur-sm text-2xl font-medium'>
              {language === 'vi' ? (
                <span
                  style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                  }}
                >
                  Tại sao lại chọn đánh chắc, tiến chắc?
                </span>
              ) : (
                <span
                  style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                  }}
                >
                  なぜしっかりと戦い、着実に前進することを選択するのでしょうか？
                </span>
              )}
            </div>
            <div className='flex flex-row gap-4'>
              <div className='bg-yellow-500 w-1/2 text-black p-3 rounded-md shadow-md bg-rgbaBgColor backdrop-blur-sm text-2xl mt-8 font-medium text-center my-auto'>
                {language === 'vi' ? (
                  <div className=' flex items-center h-72'>
                    <p className='list-disc italic'>
                      Lực lượng quân ta không quen đánh địa hình bằng phẳng, có
                      lợi thế đánh vào ban đêm và dễ ẩn nấp. Nếu đánh nhanh
                      thắng nhanh thì phải đánh cả ngày lẫn đêm liên tục, không
                      phát huy được hết sức mạnh của quân ta
                    </p>
                  </div>
                ) : (
                  <div className=' flex items-center h-72'>
                    <p className='list-disc italic'>
                      私たちの軍隊は平地での戦いに慣れていないため、夜間に戦い、容易に隠れることができるという利点があります。早く戦って早く勝てば、昼も夜も戦い続けなければならず、軍の力を十分に活用することができません
                    </p>
                  </div>
                )}
              </div>
              <div className='bg-yellow-500 w-1/2 text-black p-3 rounded-md shadow-md bg-rgbaBgColor backdrop-blur-sm text-2xl mt-8 font-medium text-center my-auto'>
                {language === 'vi' ? (
                  <div className=' flex items-center h-72'>
                    <p className='list-disc italic'>
                      Tình hình đã thay đổi, Pháp không còn trạng thái "lâm thời
                      phòng ngự" mà đã được xây dựng thành tập đoàn cứ điểm vững
                      chắc với sự yểm trợ của pháo binh và không quân mạnh mẽ
                    </p>
                  </div>
                ) : (
                  <div className=' flex items-center h-72'>
                    <p className='list-disc italic'>
                      状況は変わり、フランスはもはや「一時的な防衛」状態ではなく、強力な砲兵と空軍の支援によって強固な基地を築いた。
                    </p>
                  </div>
                )}
              </div>
              <div className='bg-yellow-500 w-1/2 text-black p-3 rounded-md shadow-md bg-rgbaBgColor backdrop-blur-sm text-2xl mt-8 font-medium text-center my-auto'>
                {language === 'vi' ? (
                  <div className=' flex items-center h-72'>
                    <p className='list-disc italic'>
                      Địa hình Điện Biên Phủ dễ thủ khó công nên chọn cách đánh
                      chắc, tiến chắc, bao vây và cắt tiếp tế của địch để dồn
                      địch vào tình thế khó khăn rồi tấn công sẽ dễ hơn
                    </p>
                  </div>
                ) : (
                  <div className=' flex items-center h-72'>
                    <p className='list-disc italic'>
                      ディエンビエンフーの地形は守りやすく攻めにくいので、しっかり攻めて着実に進み、敵の補給を包囲して遮断して敵を窮地に陥れてから攻めるという選択をすると楽になります
                    </p>
                  </div>
                )}
              </div>
              <div className='bg-yellow-500 w-1/2 text-black p-3 rounded-md shadow-md bg-rgbaBgColor backdrop-blur-sm text-2xl mt-8 font-medium text-center my-auto'>
                {language === 'vi' ? (
                  <div className=' flex items-center h-72'>
                    <p className='list-disc italic'>
                      Bác Hồ đã dặn: "Trận này chỉ được thắng không được thua vì
                      thua là hết vốn"
                    </p>
                  </div>
                ) : (
                  <div className=' flex items-center h-72'>
                    <p className='list-disc italic'>
                      ホーおじさんは、「この試合は勝つことしかできず、負けることはできない。負けたら資本がなくなってしまうからだ。」と言いました。
                    </p>
                  </div>
                )}
              </div>
              <div className='bg-yellow-500 w-1/2 text-black p-3 rounded-md shadow-md bg-rgbaBgColor backdrop-blur-sm text-2xl mt-8 font-medium text-center my-auto'>
                {language === 'vi' ? (
                  <div className=' flex items-center h-72'>
                    <p className='list-disc italic'>
                      Đánh nhanh thắng nhanh mang tính chủ quan và có phần mạo
                      hiểm
                    </p>
                  </div>
                ) : (
                  <div className=' flex items-center h-72'>
                    <p className='list-disc italic'>
                      すぐに勝つことは主観的であり、ある程度のリスクを伴います
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
