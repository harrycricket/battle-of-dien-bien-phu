import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export default function Tactic1() {
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
          className='left-side min-w-full opacity-80'
          ref={leftSideRef}
          style={{
            backgroundImage: `url('/images/battle/bg.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
          }}
        />

        <div
          className='absolute flex flex-row pt-80 px-96'
          ref={rightSideRef}
        >
          {/* <section className='space-y-9 bg-yellow-50 font-sans'>
            <div className='bg-yellow-500 text-black p-6 rounded-md shadow-md bg-rgbaBgColor backdrop-blur-sm'>
              {language === 'vi' ? (
                <span
                  style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                  }}
                >
                  Đánh nhanh thắng nhanh
                </span>
              ) : (
                <span
                  style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                  }}
                >
                  早く勝て、早く勝て
                </span>
              )}
              {language === 'vi' ? (
                <ul className='list-disc pl-10 space-y-2 italic'>
                  <li>
                    Khi tất cả pháo bắn đã sẵn sàng, ngay khi có lệnh, lập tức
                    chạy nhanh, tiến thẳng đến cơ quan đầu não
                  </li>
                  <li>
                    Ngày 14/1/1954, Võ Nguyên Giáp và Bộ Chỉ huy chiến dịch đã
                    lên phương án “đánh nhanh, thắng nhanh” và dự định nổ súng
                    vào ngày 20/1 nhằm tiêu diệt Điện Biên Phủ trong hai ngày ba
                    đêm
                  </li>
                </ul>
              ) : (
                <ul className='list-disc pl-10 space-y-2 italic'>
                  <li>
                    すべての砲撃の準備ができたら、命令が出たらすぐに急いで走って司令部に直行してください
                  </li>
                  <li>
                    1954年1月14日、ボー・グエン・ザップと作戦司令部は「迅速に戦って迅速に勝利する」計画を立て、1月20日に発砲して二日三晩でディエンビエンフーを破壊する計画を立てた。
                  </li>
                </ul>
              )}
              <h2 className='text-lg font-bold'>Lợi thế</h2>
              {language === 'vi' ? (
                <ul className='list-disc pl-10 space-y-2 italic'>
                  <li>
                    Tạo yếu tố bất ngờ, khiến Pháp không kịp phản ứng và tổ chức
                    phòng thủ hiệu quả. Đánh úp ngay khi còn chưa “ổn định được
                    chỗ ngồi”
                  </li>
                  <li>
                    Cuộc chiến không bị kéo dài, quân ta sẽ không bị kiệt sức,
                    công tác hậu cầu, tiếp tế lương thực, đạn dược cũng sẽ được
                    đảm bảo
                  </li>
                </ul>
              ) : (
                <ul className='list-disc pl-10 space-y-2 italic'>
                  <li>
                    驚きの要素を生み出し、フランスが反応して効果的な守備を組織することを不可能にします。
                    「安定席」直前攻撃
                  </li>
                  <li>
                    戦争は長引かず、我が国の軍隊は疲弊せず、兵站、食糧、弾薬の供給も保証される。
                  </li>
                </ul>
              )}
              <br />
              <h2 className='text-lg font-bold'>Hạn chế</h2>
              {language === 'vi' ? (
                <ul className='list-disc pl-10 space-y-2 italic'>
                  <li>
                    Trước nay bộ đội ta chỉ quen tác chiến vào ban đêm, tác
                    chiến ở những địa hình dễ ẩn náu.
                  </li>
                  <li>
                    Bộ đội ta không có xe tăng, không có máy bay, lại thêm chưa
                    có kinh nghiệm tác chiến hiệp đồng bộ binh và pháo binh quy
                    mô lớn.
                  </li>
                </ul>
              ) : (
                <ul className='list-disc pl-10 space-y-2 italic'>
                  <li>
                    以前は、我が国の兵士は夜間や隠れやすい地形での戦闘にしか慣れていませんでした。
                  </li>
                  <li>
                    我が国の兵士たちは戦車も航空機も持たず、歩兵と砲兵を組み合わせた大規模な作戦の経験もありません。
                  </li>
                </ul>
              )}
            </div>
          </section> */}

          <section className='space-y-9 bg-yellow-50 font-sans mt-24'>
            <div className='bg-yellow-500 text-black p-6 rounded-md shadow-md bg-rgbaBgColor backdrop-blur-sm'>
              {/* {language === 'vi' ? (
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
                    châm tác chiến thành “đánh chắc, tiến chắc”.
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
              )} */}
              {language === 'vi' ? (
                <span
                  style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                  }}
                >
                  Đánh nhanh thắng nhanh
                </span>
              ) : (
                <span
                  style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                  }}
                >
                  早く勝て、早く勝て
                </span>
              )}
              {language === 'vi' ? (
                <ul className='list-disc pl-10 space-y-2 italic'>
                  <li>
                    Khi tất cả pháo bắn đã sẵn sàng, ngay khi có lệnh, lập tức
                    chạy nhanh, tiến thẳng đến cơ quan đầu não
                  </li>
                  <li>
                    Ngày 14/1/1954, Võ Nguyên Giáp và Bộ Chỉ huy chiến dịch đã
                    lên phương án “đánh nhanh, thắng nhanh” và dự định nổ súng
                    vào ngày 20/1 nhằm tiêu diệt Điện Biên Phủ trong hai ngày ba
                    đêm
                  </li>
                </ul>
              ) : (
                <ul className='list-disc pl-10 space-y-2 italic'>
                  <li>
                    すべての砲撃の準備ができたら、命令が出たらすぐに急いで走って司令部に直行してください
                  </li>
                  <li>
                    1954年1月14日、ボー・グエン・ザップと作戦司令部は「迅速に戦って迅速に勝利する」計画を立て、1月20日に発砲して二日三晩でディエンビエンフーを破壊する計画を立てた。
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
