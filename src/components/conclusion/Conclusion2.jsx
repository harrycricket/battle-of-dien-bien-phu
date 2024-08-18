import React from 'react'
import { secondConclusion } from '../../assets'
import { gsap } from 'gsap';

const Conclusion2 = () => {
    const animatedTexts = document.querySelectorAll('.animated-text');
    const timeline = gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.out' } });

    // Add animations to the timeline for each element
    animatedTexts.forEach((el, index) => {
    timeline.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
        opacity: 1,
        y: 0,
        stagger: { amount: 0.5, from: 'start' },
        duration: 1.5,
        ease: 'power2.out',
        },
        index * 0.2 // Stagger animation timing for each element
    );
    });
  return (
    <section 
    id='summary' 
    className='h-[100vh] pt-[90px] bg-primaryBgColor relative bg-cover bg-center' 
    style={{ backgroundImage: `url(${secondConclusion})` }}>
      <div className='absolute z-10 top-2 left-[50.75%] 3xl:left-[51.2%] transform -translate-x-1/2'>
          <h1 className="text-4xl 3xl:text-[50px] font-semibold mb-6 text-center">
          <span className="text-white relative">
              TỔNG&nbsp;
              <span className="absolute -bottom-1 right-[2px] 3xl:right-1 h-[2.5px] w-[40px] bg-yellow"></span>
          </span>
          <span className="text-black relative">
              KẾT
              <span className="absolute -bottom-1 -left-[2px] 3xl:-left-1 h-[2.5px] w-[40px] bg-black"></span>
          </span>
          </h1>
      </div>

      <div className='w-full h-full flex items-center justify-center px-4 animated-text'>
          <div className='text-center text-white font-bold max-w-5xl bg-black bg-opacity-70 p-6'>
              <h1 className='text-xxs md:text-8xl lg:text-9xl mb-8'>
              Thắng lợi đã mở ra một giai đoạn mới, đưa miền Bắc quá độ lên Chủ nghĩa xã hội, xây dựng hậu phương vững chắc cho sự nghiệp đấu tranh giải phóng hoàn toàn miền Nam, thống nhất đất nước, một lần nữa khẳng định đường lối kháng chiến đúng đắn, sáng tạo của Đảng và sự lớn mạnh, trưởng thành vượt bậc của Quân đội Nhân dân Việt Nam.
              </h1>

              <h1 className='text-xxs md:text-8xl lg:text-9xl'>
              Chiến thắng Điện Biên Phủ “lừng lẫy năm châu, chấn động địa cầu” là một trong những đỉnh cao chói lọi, được ghi vào lịch sử đấu tranh chống ngoại xâm của dân tộc Việt Nam.
              </h1>
          </div>
      </div>
  </section>
  )
}

export default Conclusion2