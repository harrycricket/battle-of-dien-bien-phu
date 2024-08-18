import 'swiper/css';
import { SwiperSlide } from 'swiper/react';
import SwiperSection from './SwiperSection';
import BattleContext1 from './battle/BattleContext1';
import BattleContext2 from './battle/BattleContext2';
import BattleContext3 from './battle/BattleContext3';

export default function Battle() {
  return <div className='h-screen w-screen overflow-hidden bg-white'>
    <SwiperSection index={2}>
      <SwiperSlide>
        <BattleContext1 />
      </SwiperSlide>
      <SwiperSlide>
        <BattleContext2 />
      </SwiperSlide>
      <SwiperSlide>
        <BattleContext3 />
      </SwiperSlide>
    </SwiperSection>
  </div>;
}
