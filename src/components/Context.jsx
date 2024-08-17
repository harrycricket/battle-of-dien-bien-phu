import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Context1 from './context/Context1';
import Context2 from './context/Context2';
import Context3 from './context/Context3';
import Context4 from './context/Context4';
import { Pagination } from 'swiper/modules';

const SwiperComponent = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Context1 />
        </SwiperSlide>
        <SwiperSlide>
          <Context2 />
        </SwiperSlide>
        <SwiperSlide>
          <Context3 />
        </SwiperSlide>
        <SwiperSlide>
          <Context4 />
        </SwiperSlide>
        {/* Add more slides here */}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
