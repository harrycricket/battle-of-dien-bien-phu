import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export default function Context4() {
  const leftSideRef = useRef(null);
  const rightSideRefs = useRef([]);

  useEffect(() => {
    const animateOnScroll = (element, animation) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animation.play();
          } else {
            animation.reverse();
          }
        });
      }, { threshold: 0.5 });

      observer.observe(element);
    };

    const leftSideAnimation = gsap.fromTo(
      leftSideRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, paused: true }
    );

    animateOnScroll(leftSideRef.current, leftSideAnimation);

    rightSideRefs.current.forEach((ref) => {
      const rightSideAnimation = gsap.fromTo(
        ref,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, paused: true }
      );

      animateOnScroll(ref, rightSideAnimation);
    });
  }, []);
  const language = useSelector((state) => state.language.language);
  const isVietnamese = language == "vi";
  if (isVietnamese)
    return (
      <section id="context" className="h-[100vh] pt-[28px] bg-primaryBgColor relative">
        <h2
          className="context-title w-full text-center"
          style={{
            fontSize: "28px",
            fontWeight: 700,
            lineHeight: 1.4,
            textAlign: "center",
            textTransform: "uppercase",
            textShadow: "0.04419417em 0.04419417em 0em rgba(39, 34, 27, 0.400000)",
          }}
        >
          <span className="relative" style={{ color: "#fcde6e" }}>
            BỐI CẢNH&nbsp;
            <span className="absolute -bottom-3 right-[2px] 3xl:right-1 h-[5px] w-[50px] bg-yellow"></span>
          </span>
          <span className="relative">
            LỊCH SỬ
            <span className="absolute -bottom-3 -left-[2px] 3xl:-left-1 h-[5px] w-[50px] bg-black"></span>
          </span>
        </h2>
        <div className="context-content">
          <div
            className="left-side"
            ref={leftSideRef}
            style={{
              backgroundImage: `url('/images/context/context-4.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: `left calc(50%)`,
              backgroundRepeat: 'no-repeat',
              backgroundOpacity: '0.8',
            }}
          >
            <div className="context-content-title">
              <span style={{ fontSize: "28px" }}>06-12-1953</span>
              <br />
              <span
                style={{
                  display: "inline-block",
                  fontSize: "24px",
                  marginTop: "4px",
                }}
                className="uppercase"
              >
                BỘ CHÍNH TRỊ QUYẾT ĐỊNH TIẾN HÀNH <br />
                CHIẾN DỊCH ĐIỆN BIÊN PHỦ
              </span>
            </div>
          </div>
          <div className="right-side pt-[100px]">
            <div className="relative w-full h-fit pr-12 flex justify-end">
              <img
                src="/images/context/context-4-1.png"
                alt="Description of image"
                style={{
                  height: '280px',
                  objectFit: 'contain',
                  objectPosition: 'left top',
                }}
              />
              <div
                className="context-content-detail absolute -bottom-[-47px] -left-[-47px] max-w-[540px]"
                ref={(el) => (rightSideRefs.current[0] = el)}
                style={{ background: 'rgba(252, 222, 110, 0.82)', padding: '20px 32px' }}
              >
                <span style={{ fontSize: "16px" }}>BỘ CHÍNH TRỊ NHẬN ĐỊNH</span>
                <br />
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "16px",
                    fontWeight: 400,
                    marginTop: "4px",
                    fontStyle: 'italic',
                  }}
                >
                  Điện Biên Phủ là tập đoàn cứ điểm mạnh nhưng chỗ yếu cơ bản của địch là bị cô lập
                </span>
              </div>
            </div>
            <div className="relative w-full h-fit mt-6 pr-52 flex justify-end">
              <img
                src="/images/context/context-4-2.png"
                alt="Description of image"
                style={{
                  height: '300px',
                  objectFit: 'contain',
                  objectPosition: 'left top',
                }}
              />
              <div
                className="context-content-detail absolute -bottom-[-32px] -right-[-12px] max-w-[560px]"
                ref={(el) => (rightSideRefs.current[1] = el)}
                style={{ background: 'rgba(252, 222, 110, 0.82)', padding: '20px 32px' }}
              >
                <span style={{ fontSize: "16px" }}>BẮT ĐẦU CHIẾN DỊCH ĐIỆN BIÊN PHỦ LỊCH SỬ</span>
                <br />
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "16px",
                    fontWeight: 400,
                    marginTop: "4px",
                    fontStyle: 'italic',
                  }}
                >
                  Bộ chính trị chọn Điện Biên Phủ làm điểm quyết chiến chiến lược và bắt đầu chiến dịch Điện Biên Phủ lịch sử
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

  return (
    <section id="context" className="h-[100vh] pt-[28px] bg-primaryBgColor relative">
      <h2
        className="context-title w-full text-center"
        style={{
          fontSize: "28px",
          fontWeight: 700,
          lineHeight: 1.4,
          textAlign: "center",
          textTransform: "uppercase",
          textShadow: "0.04419417em 0.04419417em 0em rgba(39, 34, 27, 0.400000)",
        }}
      >
        <span className="relative" style={{ color: "#fcde6e" }}>
          背景&nbsp;
          <span className="absolute -bottom-3 right-[2px] 3xl:right-1 h-[5px] w-[50px] bg-yellow"></span>
        </span>
        <span className="relative">
          歴史
          <span className="absolute -bottom-3 -left-[2px] 3xl:-left-1 h-[5px] w-[50px] bg-black"></span>
        </span>
      </h2>
      <div className="context-content">
        <div
          className="left-side"
          ref={leftSideRef}
          style={{
            backgroundImage: `url('/images/context/context-4.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'left calc(50%)',
            backgroundRepeat: 'no-repeat',
            backgroundOpacity: '0.8',
          }}
        >
          <div className="context-content-title">
            <span style={{ fontSize: "28px" }}>1953年12月6日</span>
            <br />
            <span
              style={{
                display: "inline-block",
                fontSize: "24px",
                marginTop: "4px",
              }}
              className="uppercase"
            >
              政治局がディエンビエンフー戦役を決定<br />
              歴史的なディエンビエンフー戦役の開始
            </span>
          </div>
        </div>
        <div className="right-side pt-[100px]">
          <div className="relative w-full h-fit pr-12 flex justify-end">
            <img
              src="/images/context/context-4-1.png"
              alt="Description of image"
              style={{
                height: '280px',
                objectFit: 'contain',
                objectPosition: 'left top',
              }}
            />
            <div
              className="context-content-detail absolute -bottom-[-47px] -left-[-47px] max-w-[540px]"
              ref={(el) => (rightSideRefs.current[0] = el)}
              style={{ background: 'rgba(252, 222, 110, 0.82)', padding: '20px 32px' }}
            >
              <span style={{ fontSize: "16px" }}>政治局の見解</span>
              <br />
              <span
                style={{
                  display: "inline-block",
                  fontSize: "16px",
                  fontWeight: 400,
                  marginTop: "4px",
                  fontStyle: 'italic',
                }}
              >
                ディエンビエンフーは強力な拠点であるが、敵の基本的な弱点は孤立していること。
              </span>
            </div>
          </div>
          <div className="relative w-full h-fit mt-6 pr-52 flex justify-end">
            <img
              src="/images/context/context-4-2.png"
              alt="Description of image"
              style={{
                height: '300px',
                objectFit: 'contain',
                objectPosition: 'left top',
              }}
            />
            <div
              className="context-content-detail absolute -bottom-[-32px] -right-[-12px] max-w-[560px]"
              ref={(el) => (rightSideRefs.current[1] = el)}
              style={{ background: 'rgba(252, 222, 110, 0.82)', padding: '20px 32px' }}
            >
              <span style={{ fontSize: "16px" }}>ディエンビエンフー戦役の開始</span>
              <br />
              <span
                style={{
                  display: "inline-block",
                  fontSize: "16px",
                  fontWeight: 400,
                  marginTop: "4px",
                  fontStyle: 'italic',
                }}
              >
                政治局はディエンビエンフーを戦略的決戦の地点として選び、歴史的なディエンビエンフー戦役を開始した。
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}
