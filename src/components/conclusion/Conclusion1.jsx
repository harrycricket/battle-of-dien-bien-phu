import React from 'react'
import { firstConclusion } from '../../assets';
import 'animate.css';
import { gsap } from 'gsap';

const Conclusion1 = () => {
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
      style={{ backgroundImage: `url(${firstConclusion})` }}>
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
                <h1 className='text-xxs md:text-8xl lg:text-9xl mb-8 '>
                    Sau 56 ngày đêm chiến đấu kiên cường, dũng cảm, sáng tạo toàn bộ tập đoàn cứ điểm Điện Biên Phủ “bất khả chiến bại” đã bị quân và dân ta xóa sổ hoàn toàn, chiến dịch lịch sử đã giành được toàn thắng. Quân đội ta đã thắng, cả dân tộc ta đã thắng. Kế hoạch Navarre đã sụp đổ hoàn toàn!
                </h1>

                <h1 className='text-xxs md:text-8xl lg:text-9xl'>
                    Chiến thắng đã đánh dấu chấm hết cho sự ngoan cố, hiếu chiến của thực dân Pháp và đế quốc Mỹ. Chấm dứt hoàn toàn sự đô hộ của chủ nghĩa thực dân Pháp tại Đông Dương, khích lệ nhân dân thế giới đứng lên đấu tranh chống chủ nghĩa thực dân. Buộc Chính phủ Pháp cùng các bên tham chiến phải ngồi vào bàn nghị sự, ký Hiệp định Giơnevơ.
                </h1>
            </div>
        </div>
    </section>
  )
}

export default Conclusion1;
