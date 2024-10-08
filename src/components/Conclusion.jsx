import React from 'react'
import Conclusion1 from './conclusion/Conclusion1';
import SwiperSection from './SwiperSection';
import { SwiperSlide } from 'swiper/react';
import Conclusion2 from './conclusion/Conclusion2';
import Conclusion3 from './conclusion/Conclusion3';

export const Conclusion = () => {
  return (
    <div className="h-screen w-screen overflow-hidden ">
      <SwiperSection index={5}>
        <SwiperSlide>
          <Conclusion1 />
        </SwiperSlide>
        <SwiperSlide>
          <Conclusion2 />
        </SwiperSlide>
        <SwiperSlide>
          <Conclusion3 />
        </SwiperSlide>
      </SwiperSection>
    </div>

  )
};

export default Conclusion
