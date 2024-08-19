import React from "react";
import SwiperSection from "./SwiperSection";
import { SwiperSlide } from "swiper/react";
import HeroList from "./hero/HeroList";
import Leader from "./hero/Leader";
import Leader2 from "./hero/Leader2";
import LeaderV2 from "./hero/LeaderV2";

export const Heroes = () => {
  return (
    <div className="h-screen w-screen overflow-hidden ">
      <SwiperSection index={6}>
        <SwiperSlide>
          <Leader />
        </SwiperSlide>
        <SwiperSlide>
          <LeaderV2 />
        </SwiperSlide>
        <SwiperSlide>
          <Leader2 />
        </SwiperSlide>
        <SwiperSlide>
          <HeroList />
        </SwiperSlide>
      </SwiperSection>
    </div>
  );
};

export default Heroes;
