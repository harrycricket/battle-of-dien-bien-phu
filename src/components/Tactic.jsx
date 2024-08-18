import 'swiper/css';
import { SwiperSlide } from 'swiper/react';
import SwiperSection from './SwiperSection';
import Tactic1 from './tactic/Tactic1';
import Tactic2 from './tactic/Tactic2';

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
      </SwiperSection>
    </div>
  );
}
