import 'swiper/css';
import { SwiperSlide } from 'swiper/react';
import SwiperSection from './SwiperSection';
import Tactic1 from './tactic/Tactic1';
import Tactic2 from './tactic/Tactic2';
import Tactic3 from './tactic/Tactic3';
import Tactic4 from './tactic/Tactic4';
import Tactic5 from './tactic/Tactic5';
import Tactic6 from './tactic/Tactic6';

export default function Battle() {
  return (
    <div className='h-screen w-screen overflow-hidden bg-white'>
      <SwiperSection index={4}>
        <SwiperSlide>
          <Tactic1 />
        </SwiperSlide>
        <SwiperSlide>
          <Tactic2 />
        </SwiperSlide>
        <SwiperSlide>
          <Tactic3 />
        </SwiperSlide>
        <SwiperSlide>
          <Tactic4 />
        </SwiperSlide>
        <SwiperSlide>
          <Tactic5 />
        </SwiperSlide>
        <SwiperSlide>
          <Tactic6 />
        </SwiperSlide>
      </SwiperSection>
    </div>
  );
}
