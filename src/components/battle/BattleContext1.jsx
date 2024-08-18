import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function BattleContext1() {
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
      id='battle'
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
        <h1 className="text-xl 3xl:text-[30px] font-semibold mb-6">
          <span className="text-[#12296c] relative">
            CÁC ĐỢT&nbsp;
            <span className="absolute -bottom-1 right-[2px] 3xl:-right-[1px] h-[2.5px] w-full bg-yellow"></span>
          </span>
          <span className="relative text-[#12296c]">
            TẤN CÔNG
            <span className="absolute -bottom-1 -left-[2px] 3xl:-left-[1px] h-[2.5px] w-full bg-yellow"></span>
          </span>
        </h1>
      </h2>
      <div className='context-content' ref={leftSideRef}>
        <div
          className='left-side min-w-full'
          ref={leftSideRef}
          style={{
            backgroundImage: `url('/images/battle/dot1.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
          }}
        >
          <div className='context-content-title top-28 h-28 rounded-lg' ref={leftSideRef}>
            <span
              className='uppercase'
              style={{
                fontSize: '28px',
              }}
            >
              Đợt tấn công đầu tiên
            </span>
            <br />
            <span
              style={{
                display: 'inline-block',
                fontSize: '20px',
                marginTop: '4px',
              }}
            >
              13/03/1954 - 17/03/1954
            </span>
          </div>

          <div
            ref={leftSideRef}
            className='context-content-title top-80 h-64 max-w-96 backdrop-blur-sm'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: 6 }}
          >
            <span
              className='uppercase'
              style={{
                fontSize: '28px',
              }}
            >
              Kết quả
            </span>
            <br />
            <br />
            <ul className='list-disc pl-6 space-y-2 italic font-normal'>
              <li>Triệt hạ cứ điểm Him Lam, Bản Kéo, đồi Độc Lập</li>
              <li>
                Phá vỡ cửa ngõ phía Bắc của Tập đoàn cứ điểm Điện Biên Phủ
              </li>
              <li>
                Tiêu diệt và bắt sống trên 2.000 tên địch, phá hủy 25 máy bay,
                xóa sổ 1 trung đoàn, uy hiếp sân bay Mường Thanh
              </li>
              <li>
                Charles Piroth bất lực trước pháo binh của ta đã dùng lựu đạn tự
                sát
              </li>
            </ul>
          </div>
        </div>

        <div className='absolute pt-[100px] pl-[750px]' ref={rightSideRef}>
          <section className='space-y-9 bg-yellow-50 font-sans mt-4 pr-8'>
            <div className='bg-yellow-500 text-black p-6 rounded-md shadow-md bg-rgbaBgColor backdrop-blur-sm'>
              <h2 className='text-lg font-bold'>13-03-1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                <li>
                  Đúng 8 giờ sáng, Bộ đội ta bắn cháy hai chiếc máy bay Dakota của
                  quân Pháp tại sân bay Mường Thanh
                </li>
                <li>
                  17 giờ 5 phút, quân ta đồng loạt tấn công các cứ điểm Him Lam
                </li>
              </ul>
              <br />
              <h2 className='text-lg font-bold'>14-03-1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                <li>7 giờ 30 phút, quân Pháp phản công ở Him Lam bất thành</li>
                <li>16 giờ 45 phút, quân ta nổ súng đánh đồi Độc Lập</li>
              </ul>
              <br />
              <h2 className='text-lg font-bold'>15-03-1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                <li>
                  6 giờ 30 phút, lá cờ <strong>Quyết chiến quyết thắng</strong>{' '}
                  được cắm trên đồi Độc Lập
                </li>
                <li>
                  12 giờ 45 phút, trung tá Charles Piroth (Jean Charles Clément
                  Piroth) tự sát
                </li>
                <li>
                  Quân Pháp tổ chức phản công tái chiếm đồi Độc Lập nhưng đều bị
                  đánh lui
                </li>
              </ul>
              <br />
              <h2 className='text-lg font-bold'>17-03-1954</h2>
              <ul className='list-disc pl-10 space-y-2 italic'>
                <li>Quân Pháp ở Bản Kéo sợ hãi bỏ chạy</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
