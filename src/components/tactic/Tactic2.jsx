import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Tactic2() {
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
      <div className='context-content' ref={leftSideRef}>
        <div
          className='left-side min-w-full'
          style={{
            backgroundImage: `url('/images/battle/bg.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
          }}
        />

        <div className='absolute pt-[100px] pl-[650px]' ref={rightSideRef}>
          <section className='space-y-9 bg-yellow-50 font-sans mt-8 pr-24'>
            <div className='bg-yellow-500 text-black p-6 rounded-md shadow-md bg-rgbaBgColor backdrop-blur-sm text-2xl font-medium'>
              <span
                style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                }}
              >
                Tại sao lại chọn đánh chắc, tiến chắc?
              </span>
              <br />
              <br />
              <ul className='list-disc pl-10 space-y-2 italic font-normal'>
                <li className=''>
                  Bác Hồ đã dặn: "Trận này chỉ được thắng không được thua vì
                  thua là hết vốn"
                </li>
                <li>
                  Đánh nhanh thắng nhanh mang tính chủ quan và có phần mạo hiểm
                </li>
                <li>
                  Lực lượng quân ta không quen đánh địa hình bằng phẳng, có lợi
                  thế đánh vào ban đêm và dễ ẩn nấp. Nếu đánh nhanh thắng nhanh
                  thì phải đánh cả ngày lẫn đêm liên tục, không phát huy được
                  hết sức mạnh của quân ta
                </li>
                <li>
                  Tình hình đã thay đổi, Pháp không còn trạng thái "lâm thời
                  phòng ngự" mà đã được xây dựng thành tập đoàn cứ điểm vững
                  chắc với sự yểm trợ của pháo binh và không quân mạnh mẽ
                </li>
                <li>
                  Địa hình Điện Biên Phủ dễ thủ khó công nên chọn cách đánh
                  chắc, tiến chắc, bao vây và cắt tiếp tế của địch để dồn địch
                  vào tình thế khó khăn rồi tấn công sẽ dễ hơn
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
