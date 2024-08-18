import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export default function Context1() {
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

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

    const rightSideAnimation = gsap.fromTo(
      rightSideRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, paused: true }
    );

    animateOnScroll(leftSideRef.current, leftSideAnimation);
    animateOnScroll(rightSideRef.current, rightSideAnimation);
  }, []);

  const language = useSelector((state) => state.language.language);
  const isVietnamese = language == "vi";
  if (isVietnamese)
    return (
      <section id="context" className="h-[100vh] pt-[28px] bg-[#fef6d9] relative">
        <h2
          className="context-title w-full text-center"
          style={{
            fontSize: "28px",
            fontWeight: 700,
            lineHeight: 1.4,
            textAlign: "center",
            textTransform: "uppercase",

          }}
        >
          <h1 className="text-3xl 3xl:text-[30px] font-semibold mb-6">
            <span className="text-[#12296c] relative">
              BỐI CẢNH&nbsp;
              <span className="absolute -bottom-1 right-[2px] 3xl:-right-[1px] h-[2.5px] w-full bg-[#fdd142]"></span>
            </span>
            <span className="relative text-[#12296c]">
              LỊCH SỬ
              <span className="absolute -bottom-1 -left-[2px] 3xl:-left-[1px] h-[2.5px] w-full bg-[#fdd142]"></span>
            </span>
          </h1>
        </h2>
        <div className="context-content">
          <div
            className="left-side"
            ref={leftSideRef}
            style={{
              backgroundImage: `url('/images/context/chiendichtruoc1954.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: `left calc(50% - 40px)`,
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="context-content-title">
              <span style={{ fontSize: "28px" }}>1946-1953</span>
              <br />
              <span
                style={{
                  display: "inline-block",
                  fontSize: "24px",
                  marginTop: "4px",
                }}
                className="uppercase"
              >
                Quân và dân ta đã lần lượt đánh bại <br />
                các chiến lược quân sự của Pháp
              </span>
            </div>
          </div>
          <div className="right-side pt-[100px]" ref={rightSideRef}>
            <div className="relative w-full h-fit">
              <img
                src="/images/context/1947.png"
                alt="Description of image"
                style={{
                  height: '300px',
                  objectFit: 'contain',
                  objectPosition: 'left top',
                }}
              />
              <div className="context-content-detail absolute -bottom-[-47px] -left-[-47px] max-w-[540px]">
                <span style={{ fontSize: "16px" }}>CHIẾN DỊCH VIỆT BẮC THU - ĐÔNG NĂM 1947</span>
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
                  Là đòn quyết định làm thất bại hoàn toàn chiến lược đánh nhanh, thắng nhanh của địch, bảo vệ an toàn căn cứ địa cách mạng và đầu não kháng chiến, mở ra giai đoạn mới của cuộc kháng chiến
                </span>
              </div>
            </div>
            <div className="relative w-full h-fit mt-6 pr-52 flex justify-end">
              <img
                src="/images/context/1950.png"
                alt="Description of image"
                style={{
                  height: '300px',
                  objectFit: 'contain',
                  objectPosition: 'left top',
                }}
              />
              <div className="context-content-detail absolute -bottom-[-32px] -right-[-12px] max-w-[560px] fadeInUp">
                <span style={{ fontSize: "16px" }}>CHIẾN THẮNG BIÊN GIỚI NĂM 1950</span>
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
                  Một bước chuyển cơ bản cho cuộc kháng chiến bước vào giai đoạn mới, giai đoạn ta nắm quyền chủ động chiến lược trên chiến trường chính Bắc Bộ, chuyển hẳn sang liên tục tấn công và phản công địch
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  else return (
    <section id="context" className="h-[100vh] pt-[28px] bg-[#fef6d9] relative">
      <h2
        className="context-title w-full text-center"
        style={{
          fontSize: "28px",
          fontWeight: 700,
          lineHeight: 1.4,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        <h1 className="text-3xl 3xl:text-[30px] font-semibold mb-6">
          <span className="text-[#12296c] relative">
            歴史的
            <span className="absolute -bottom-1 right-[2px] 3xl:-right-[1px] h-[2.5px] w-full bg-[#fdd142]"></span>
          </span>
          <span className="relative text-[#12296c]">
            背景
            <span className="absolute -bottom-1 -left-[2px] 3xl:-left-[1px] h-[2.5px] w-full bg-[#fdd142]"></span>
          </span>
        </h1>
      </h2>
      <div className="context-content">
        <div
          className="left-side"
          style={{
            backgroundImage: `url('/images/context/chiendichtruoc1954.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: `left calc(50% - 40px)`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="context-content-title">
            <span style={{ fontSize: "28px" }}>1946-1953</span>
            <br />
            <span
              style={{
                display: "inline-block",
                fontSize: "24px",
                marginTop: "4px",
              }}
              className="uppercase"
            >
              我々の軍と民衆はフランスの軍事戦略を次々と打ち破った
            </span>
          </div>
        </div>
        <div className="right-side pt-[100px]">
          <div className="relative w-full h-fit">
            <img
              src="/images/context/1947.png"
              alt="Description of image"
              style={{
                height: "300px",
                objectFit: "contain",
                objectPosition: "left top",
              }}
            />
            <div className="context-content-detail absolute -bottom-[-47px] -left-[-47px] max-w-[540px]">
              <span style={{ fontSize: "16px" }}>1947年秋冬のベトバク戦役</span>
              <br />
              <span
                style={{
                  display: "inline-block",
                  fontSize: "16px",
                  fontWeight: 400,
                  marginTop: "4px",
                  fontStyle: "italic",
                }}
              >
                これは敵の速攻・速勝戦略を完全に打ち破り、革命の拠点と抗戦の本部を安全に保護し、抗戦の新たな段階を開いた決定的な一撃であった。
              </span>
            </div>
          </div>
          <div className="relative w-full h-fit mt-6 pr-52 flex justify-end">
            <img
              src="/images/context/1950.png"
              alt="Description of image"
              style={{
                height: "300px",
                objectFit: "contain",
                objectPosition: "left top",
              }}
            />
            <div className="context-content-detail absolute -bottom-[-32px] -right-[-12px] max-w-[560px]">
              <span style={{ fontSize: "16px" }}>1950年の国境戦勝利</span>
              <br />
              <span
                style={{
                  display: "inline-block",
                  fontSize: "16px",
                  fontWeight: 400,
                  marginTop: "4px",
                  fontStyle: "italic",
                }}
              >
                抗戦の新たな段階に移行するための基本的な転換点であり、我々は北部主戦場で戦略的主導権を握り、絶え間ない攻撃と反攻に完全に転じた。
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}
