import React, { useEffect, useRef } from 'react'
import { firstConclusion } from '../../assets';
import 'animate.css';
import { gsap } from 'gsap';
import '../../index.css';
import { useSelector } from 'react-redux';

const Conclusion1 = () => {
    const leftSideRef = useRef(null);
    const rightSideRef = useRef(null);
    const language = useSelector((state) => state.language.language);
    const isVietNamase = language === "vi";

  return (
    <section 
      id='summary' 
      className='h-[100vh] pt-[90px] bg-primaryBgColor relative bg-cover bg-center' 
      style={{ backgroundImage: `url(${firstConclusion})` }}>
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
                    総括&nbsp;
                    <span className="absolute -bottom-1 right-[2px] 3xl:right-1 h-[2.5px] w-[40px] bg-yellow"></span>
                </span>
                <span className="text-black relative">
                    結論
                    <span className="absolute -bottom-1 -left-[2px] 3xl:-left-1 h-[2.5px] w-[40px] bg-black"></span>
                </span>
                </>
            )}
            </h1>
        </div>

            <div className='w-full h-full flex items-center justify-center px-4 animated-text' ref={leftSideRef}>
                <div className='text-center font-bold min-w-6xl bg-yellow bg-opacity-70 p-6 rounded-md'>
                    <h1 className='text-4xl md:text-8xl lg:text-9xl mb-6 text-black font-extrabold text-shadow-cus'>
                    1954年5月7日
                    </h1>

                    {isVietNamase ? (
                    <>
                        <h1 className='text-4xl md:text-8xl lg:text-9xl mb-4 text-black font-extrabold text-shadow-cus uppercase'>
                        Việt Nam Giành Chiến Thắng Điện Biên Phủ
                        <br />
                        "Lừng Lẫy Năm Châu, Chấn Động Địa Cầu"
                        </h1>

                        <h1 className='text-3xl font-medium italic md:text-8xl lg:text-9xl'>
                        "Chín năm làm một Điện Biên <br />
                        Nên vành hoa đỏ, nên thiên sử vàng"
                        </h1>

                        <h2 className='text-right mt-4 mr-[250px] text-3xl font-normal italic md:text-8xl lg:text-9xl'>
                        Tố Hữu
                        </h2>
                    </>
                    ) : (
                    <>
                        <h1 className='text-4xl md:text-8xl lg:text-9xl mb-4 text-black font-extrabold text-shadow-cus uppercase'>
                        Dien Bien Phuで勝利を収める
                        <br />
                        "五大陸に響き渡り、地球を揺るがす"
                        </h1>

                        <h1 className='text-3xl font-medium italic md:text-8xl lg:text-9xl'>
                        "Chin nam lam mot Dien Bien <br />
                        Nen vanh hoa do, nen thien su vang"
                        </h1>

                        <h2 className='text-right mt-4 mr-[100px] text-3xl font-normal italic md:text-8xl lg:text-9xl'>
                        To Huu
                        </h2>
                    </>
                    )}
                </div>
            </div>

    </section>
  )
}

export default Conclusion1;
