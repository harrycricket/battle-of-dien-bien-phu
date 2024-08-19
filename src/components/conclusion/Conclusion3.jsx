import React from 'react'
import { secondConclusion, signConclusion, tableConclusion } from '../../assets'
import { gsap } from 'gsap';
import { useSelector } from 'react-redux';

const Conclusion3 = () => {
    const animatedTexts = document.querySelectorAll('.animated-text');
    const timeline = gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.out' } });
    const language = useSelector((state) => state.language.language);
    const isVietNamase = language === "vi";

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
            {isVietNamase ? (
                    <>
                    <span className="text-white relative">
                        TỔNG&nbsp;
                        <span className="absolute -bottom-1 right-[2px] 3xl:right-1 h-[2.5px] w-[40px] bg-yellow"></span>
                    </span>
                    <span className="text-black relative">
                        KẾT
                        <span className="absolute -bottom-1 -left-[2px] 3xl:-left-1 h-[2.5px] w-[40px] bg-black"></span>
                    </span>
                    </>
                ) : (
                    <>
                    <span className="text-white relative">
                        総&nbsp;
                        <span className="absolute -bottom-1 right-[2px] 3xl:right-1 h-[2.5px] w-[40px] bg-yellow"></span>
                    </span>
                    <span className="text-black relative">
                        括
                        <span className="absolute -bottom-1 -left-[2px] 3xl:-left-1 h-[2.5px] w-[40px] bg-black"></span>
                    </span>
                    </>
                )}
          </h1>
      </div>

      <div className='w-full h-full flex items-center justify-center px-4 animated-text'>
    <div className='text-center font-bold max-w-6xl bg-yellow bg-opacity-70 p-6 m-2 rounded-md'>
        {isVietNamase ? (
        <>
            <h1 className='text-4xl md:text-8xl lg:text-9xl mb-6 text-black font-extrabold text-shadow-cus'>
            21/7/1954
            </h1>
            <h1 className='text-4xl md:text-8xl lg:text-9xl mb-4 text-black font-extrabold text-shadow-cus uppercase'>
            Mở ra một giai đoạn mới cho Việt Nam nói riêng,<br />
            và Đông Dương nói chung
            </h1>
            <h1 className='text-3xl font-medium italic md:text-8xl lg:text-9xl text-center'>
            Chấm dứt hoàn toàn sự đô hộ của chủ nghĩa thực dân Pháp tại ​Đông Dương, khích lệ nhân dân thế giới đứng lên đấu tranh ​chống chủ nghĩa thực dân.
            </h1>
            <h1 className='text-3xl font-medium italic md:text-8xl lg:text-9xl text-center mt-4'>
            Miền Bắc tiến lên Chủ nghĩa xã hội, xây dựng hậu phương vững ​chắc cho cuộc đấu tranh giải phóng miền Nam, thống nhất đất ​nước, khẳng định đường lối kháng chiến đúng đắn của Đảng và ​sự trưởng thành vượt bậc của Quân đội Nhân dân Việt Nam.
            </h1>
        </>
        ) : (
        <>
            <h1 className='text-4xl md:text-8xl lg:text-9xl mb-6 text-black font-extrabold text-shadow-cus'>
            1954年7月21日
            </h1>
            <h1 className='text-4xl md:text-8xl lg:text-9xl mb-4 text-black font-extrabold text-shadow-cus uppercase'>
            ベトナムに新しい時代を開き、<br />
            インドシナに広がる影響
            </h1>
            <h1 className='text-3xl font-medium italic md:text-8xl lg:text-9xl text-center'>
            フランス植民地主義の完全な終焉をもたらし、<br />
            世界中の人々が植民地主義に反抗する闘争を促進しました。
            </h1>
            <h1 className='text-3xl font-medium italic md:text-8xl lg:text-9xl text-center mt-4'>
            北ベトナムは社会主義に進み、南ベトナムの解放闘争のための<br />
            強固な後方支援を築き、党の正しい抗戦路線と<br />
            ベトナム人民軍の顕著な成長を確信させました。
            </h1>
        </>
        )}
    </div>
    </div>

  </section>
  )
}

export default Conclusion3