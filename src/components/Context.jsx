import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Context1 from './context/Context1';
import Context2 from './context/Context2';
import Context3 from './context/Context3';
import Context4 from './context/Context4';
import SwiperSection from './SwiperSection';

const SwiperComponent = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <SwiperSection index={1}>
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
      </SwiperSection>
    </div>
  );
};

export default SwiperComponent;
