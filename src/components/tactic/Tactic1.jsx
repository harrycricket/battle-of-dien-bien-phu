import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Tactic1() {
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

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
      
      <h2
        className='context-title w-full text-center'
        style={{
          fontSize: '28px',
          fontWeight: 700,
          lineHeight: 1.4,
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        <h1 className="text-3xl 3xl:text-[30px] font-semibold mb-6">
          <span className="text-[#ffd22f] relative">
          Phương châm&nbsp;
            <span className="absolute -bottom-1 right-[2px] 3xl:-right-[1px] h-[2.5px] w-full bg-white"></span>
          </span>
          <span className="text-[#ffd22f] relative">
          tác chiến
            <span className="absolute -bottom-1 -left-[2px] 3xl:-left-[1px] h-[2.5px] w-full bg-white"></span>
          </span>
        </h1>
      </h2>
      <div className='context-content' ref={leftSideRef}>
        <div
          className='left-side min-w-full opacity-80'
          ref={leftSideRef}
          style={{
            backgroundImage: `url('/images/battle/keophao.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
          }}
        />

        <div
          className='absolute flex flex-row pt-32 pl-28 pr-12 gap-12'
          ref={rightSideRef}
        >
          <section className='space-y-9 bg-yellow-50 font-sans'>
            <div className='bg-yellow-500 text-black p-6 rounded-md shadow-md bg-rgbaBgColor backdrop-blur-sm'>
              <span
                style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                }}
              >
                Đánh nhanh thắng nhanh
              </span>
              <ul className='list-disc pl-10 space-y-2 italic'>
                <li>
                  Khi tất cả pháo bắn đã sẵn sàng, ngay khi có lệnh, lập tức
                  chạy nhanh, tiến thẳng đến cơ quan đầu não
                </li>
                <li>
                  Ngày 14/1/1954, Võ Nguyên Giáp và Bộ Chỉ huy chiến dịch đã lên
                  phương án “đánh nhanh, thắng nhanh” và dự định nổ súng vào
                  ngày 20/1 nhằm tiêu diệt Điện Biên Phủ trong hai ngày ba đêm
                </li>
              </ul>
              <br />
              <h2 className='text-lg font-bold'>Lợi thế</h2>
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
              <br />
              <h2 className='text-lg font-bold'>Hạn chế</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                <li>
                  Trước nay bộ đội ta chỉ quen tác chiến vào ban đêm, tác chiến
                  ở những địa hình dễ ẩn náu.
                </li>
                <li>
                  Bộ đội ta không có xe tăng, không có máy bay, lại thêm chưa có
                  kinh nghiệm tác chiến hiệp đồng bộ binh và pháo binh quy mô
                  lớn.
                </li>
              </ul>
            </div>
          </section>

          <section className='space-y-9 bg-yellow-50 font-sans mt-24'>
            <div className='bg-yellow-500 text-black p-6 rounded-md shadow-md bg-rgbaBgColor backdrop-blur-sm'>
              <span
                style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                }}
              >
                Đánh chắc, tiến chắc
              </span>
              <ul className='list-disc pl-10 space-y-2 italic'>
                <li>
                  Bao vây cứ điểm của địch, dùng hệ thống hầm hào như một chiếc
                  khiên bảo vệ bộ đội trước đạn pháo của kẻ thù, từng bước tiến
                  vào lòng địch
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
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
