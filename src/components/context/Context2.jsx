import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export default function Context2() {
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
              backgroundImage: `url('/images/context/context-nava.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: `left center`,
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="context-content-title">
              <span style={{ fontSize: "28px" }}>07/1953</span>
              <br />
              <span
                style={{
                  display: "inline-block",
                  fontSize: "24px",
                  marginTop: "4px",
                }}
                className="uppercase"
              >
                Thực dân Pháp và can thiệp Mỹ <br />
                đã cho ra đời Kế hoạch Nava
              </span>
            </div>
          </div>
          <div className="right-side pt-[100px]" ref={rightSideRef}>
            <section className="space-y-9 bg-yellow-50 font-sans mt-4 pr-8">
              <div
                className="bg-yellow-500 text-black p-6 rounded-md shadow-md"
                style={{ backgroundColor: 'rgba(252, 222, 110, 0.6)' }}
              >
                <h2 className="text-lg font-bold mb-4">
                  TẬP TRUNG BINH LỰC, &quot;QUẢ ĐẤM THÉP&quot; QUYẾT CHIẾN VỚI VIỆT MINH
                </h2>
                <ul className="list-disc pl-6 space-y-2 italic">
                  <li>Tăng viện lớn về binh lực và chi phí chiến tranh</li>
                  <li>
                    Pháp và Mỹ lập kế hoạch đến năm 1954 quân chủ lực Pháp có 7 sư đoàn <br />
                    cơ động chiến lược với 27 binh đoàn làm nắm đấm thép
                  </li>
                </ul>
              </div>

              <div
                className="bg-yellow-300 text-black p-6 rounded-md shadow-md"
                style={{ backgroundColor: 'rgba(252, 222, 110, 0.6)' }}
              >
                <h2 className="text-lg font-bold mb-4">
                  MƯU TOAN TRONG VÒNG 18 THÁNG
                </h2>
                <ul className="list-disc pl-6 space-y-2 italic">
                  <li>
                    sẽ tiêu diệt phần lớn bộ đội chủ lực của ta, kiểm soát lãnh thổ Việt Nam <br />
                    và bình định cả Nam Đông Dương.
                  </li>
                </ul>
              </div>

              <div
                className="bg-yellow-500 text-black p-6 rounded-md shadow-md"
                style={{ backgroundColor: 'rgba(252, 222, 110, 0.6)' }}
              >
                <h2 className="text-lg font-bold mb-4">
                  LÀ NỖ LỰC CUỐI CÙNG CỦA THỰC DÂN PHÁP VÀ CAN THIỆP MỸ
                </h2>
                <ul className="list-disc pl-6 space-y-2 italic">
                  <li>nhằm giành lại thế chủ động có tính quyết định về quân sự trên chiến trường</li>
                  <li>làm cơ sở cho một giải pháp chính trị có lợi cho chúng</li>
                </ul>
              </div>
            </section>
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
          歴史的&nbsp;
          <span className="absolute -bottom-3 right-[2px] 3xl:right-1 h-[5px] w-[50px] bg-yellow"></span>
        </span>
        <span className="relative">
          背景
          <span className="absolute -bottom-3 -left-[2px] 3xl:-left-1 h-[5px] w-[50px] bg-black"></span>
        </span>
      </h2>
      <div className="context-content">
        <div
          className="left-side"
          style={{
            backgroundImage: `url('/images/context/context-nava.webp')`,
            backgroundSize: "cover",
            backgroundPosition: `left center`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="context-content-title">
            <span
              style={{
                fontSize: "28px",
              }}
            >
              1953年7月
            </span>
            <br />
            <span
              style={{
                display: "inline-block",
                fontSize: "24px",
                marginTop: "4px",
              }}
              className="uppercase"
            >
              フランス植民地勢力とアメリカの介入 <br />
              ナヴァ計画を発表
            </span>
          </div>
        </div>
        <div className="right-side pt-[100px]">
          <section className="space-y-9 bg-yellow-50 font-sans mt-4 pr-8">
            <div
              className="bg-yellow-500 text-black p-6 rounded-md shadow-md"
              style={{ backgroundColor: "rgba(252, 222, 110, 0.6)" }}
            >
              <h2 className="text-lg font-bold mb-4">
                兵力の集中、「鉄拳」でベトミンと決戦
              </h2>
              <ul className="list-disc pl-6 space-y-2 italic">
                <li>大規模な兵力増強と戦費の増加</li>
                <li>
                  フランスとアメリカは1954年までにフランスの主力軍を7つの機動戦略師団と27の鉄拳部隊に増強する計画を立てた
                </li>
              </ul>
            </div>

            <div
              className="bg-yellow-300 text-black p-6 rounded-md shadow-md"
              style={{ backgroundColor: "rgba(252, 222, 110, 0.6)" }}
            >
              <h2 className="text-lg font-bold mb-4">18ヶ月以内の計略</h2>
              <ul className="list-disc pl-6 space-y-2 italic">
                <li>
                  我々の主力部隊の大部分を撃破し、ベトナムの領土を制圧し、南インドシナ全体を平定するつもりであった。
                </li>
              </ul>
            </div>

            <div
              className="bg-yellow-500 text-black p-6 rounded-md shadow-md"
              style={{ backgroundColor: "rgba(252, 222, 110, 0.6)" }}
            >
              <h2 className="text-lg font-bold mb-4">
                フランス植民地勢力とアメリカの介入の最後の努力
              </h2>
              <ul className="list-disc pl-6 space-y-2 italic">
                <li>
                  戦場での決定的な軍事的主導権を取り戻すため
                </li>
                <li>
                  彼らに有利な政治的解決の基礎を築くため
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
