import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// import required modules
import { Pagination, Keyboard, Autoplay } from "swiper/modules";
import Hero from "./Hero";

import HoangVanThai from "../../assets/heroes/HoangVanThai.jpeg";
import LeLiem from "../../assets/heroes/LeLiem.jpeg";
import TranDangNinh from "../../assets/heroes/TranDangNinh.jpg";
import LeTrongTan from "../../assets/heroes/LeTrongTan.jpeg";
import ChuHuyMan from "../../assets/heroes/ChuHuyMan.png";
import VuongThuaVu from "../../assets/heroes/VuongThuaVu.jpg";
import HoangMinhThao from "../../assets/heroes/HoangMinhThao.jpg";
import LeQuangBa from "../../assets/heroes/LeQuangBa.jpg";
import SongHao from "../../assets/heroes/SongHao.jpg";


const leaders = [
  {
    fullName: "Hoàng Văn Thái",
    description: "Phó Tổng Tham mưu trưởng",
    year: "1915 - 1986",
    image: HoangVanThai,
  },
  {
    fullName: "Lê Liêm",
    description: "Chủ nhiệm Chính trị mặt trận kiêm nhà báo",
    year: "1922 - 1985",
    image: LeLiem,
  },
  {
    fullName: "Trần Đăng Ninh",
    description: "Chủ nhiệm Tổng cục Cung cấp",
    year: "1910 – 1955",
    image: TranDangNinh,
  },
  {
    fullName: "Lê Trọng Tấn",
    description:
      "Tư lệnh Đại đoàn 312, đơn vị đánh trận Him Lam mở màn chiến dịch Điện Biên Phủ lịch sử đêm 13/3/1954",
    year: "1914 - 1986",
    image: LeTrongTan,
  },
  {
    fullName: "Chu Huy Mân",
    description: "Chính ủy, Bí thư Đảng ủy Đại đoàn 316",
    year: "1913 - 2006",
    image: ChuHuyMan,
  },
  {
    fullName: "Vương Thừa Vũ",
    description: "Đại đội trưởng kiêm Chính ủy",
    year: "1910 - 1980",
    image: VuongThuaVu,
  },
  {
    fullName: "Hoàng Minh Thảo",
    description:
      "Chỉ huy Đại đoàn 304 - một trong năm Đại đoàn chủ lực tham gia chiến dịch lịch sử Điện Biên Phủ",
    year: "1921 - 2008",
    image: HoangMinhThao,
  },
  {
    fullName: "Lê Quảng Ba",
    description:
      "Chỉ huy Đại đoàn 316 đề xuất phương án hạ cứ điểm Đồi A1 bằng quả bộc phá",
    year: "1914 – 1988",
    image: LeQuangBa,
  },
  {
    fullName: "Song Hào",
    description:
      "Cùng Bộ Chỉ huy Đại đoàn 308 chỉ đạo quyết đoán, đúng đắn, sáng tạo, kịp thời trên toàn mặt trận chiến đấu tiêu diệt địch",
    year: "1917 - 2004",
    image: SongHao,
  },
];

export default function Leader2() {
  return (
    <section
      id="hero-list"
      className=" bg-primaryBgColor h-[100vh] w-screen overflow-hidden flex flex-col justify-center ml-4"
    >
      {/* Những anh hùng tiêu biểu */}
      <h2 className="text-center text-[50px] text-primaryRed font-bold my-4">
        LÃNH ĐẠO VÀ CHỈ HUY
      </h2>
      <Swiper
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Keyboard, Autoplay]}
        className="w-full py-12 mySwiper"
      >
        {leaders.map((leader, index) => (
          <SwiperSlide key={index} className="bg-center bg-cover w-[600px]">
            <Hero
              fullName={leader.fullName.toUpperCase()}
              description={leader.description.toUpperCase()}
              year={leader.year}
              image={leader.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
