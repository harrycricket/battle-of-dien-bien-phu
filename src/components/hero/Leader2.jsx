import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

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
import HeroBg from "../../assets/heroes/HeroBg.png";

const leaders = [
  {
    fullName: "Hoàng Văn Thái",
    description: "Phó Tổng Tham mưu trưởng",
    japanese: "副総参謀長",
    year: "1915 - 1986",
    image: HoangVanThai,
  },
  {
    fullName: "Lê Liêm",
    description: "Chủ nhiệm Chính trị mặt trận kiêm nhà báo",
    japanese: "戦線政治委員長兼ジャーナリスト",
    year: "1922 - 1985",
    image: LeLiem,
  },
  {
    fullName: "Trần Đăng Ninh",
    description: "Chủ nhiệm Tổng cục Cung cấp",
    japanese: "総供給局長",
    year: "1910 – 1955",
    image: TranDangNinh,
  },
  {
    fullName: "Lê Trọng Tấn",
    description:
      "Tư lệnh Đại đoàn 312, đơn vị đánh trận Him Lam mở màn chiến dịch Điện Biên Phủ lịch sử đêm 13/3/1954",
    japanese:
      "ディエンビエンフー作戦の開幕戦である1954年3月13日のヒムラム戦闘を指揮した第312師団司令官",
    year: "1914 - 1986",
    image: LeTrongTan,
  },
  {
    fullName: "Chu Huy Mân",
    description: "Chính ủy, Bí thư Đảng ủy Đại đoàn 316",
    japanese: "第316師団の政治委員兼党書記",
    year: "1913 - 2006",
    image: ChuHuyMan,
  },
  {
    fullName: "Vương Thừa Vũ",
    description: "Đại đội trưởng kiêm Chính ủy",
    japanese: "大隊長兼政治委員",
    year: "1910 - 1980",
    image: VuongThuaVu,
  },
  {
    fullName: "Hoàng Minh Thảo",
    description:
      "Chỉ huy Đại đoàn 304 - một trong năm Đại đoàn chủ lực tham gia chiến dịch lịch sử Điện Biên Phủ",
    japanese:
      "ディエンビエンフー作戦に参加した5つの主要師団の一つである第304師団の指揮官",
    year: "1921 - 2008",
    image: HoangMinhThao,
  },
  {
    fullName: "Lê Quảng Ba",
    description:
      "Chỉ huy Đại đoàn 316 đề xuất phương án hạ cứ điểm Đồi A1 bằng quả bộc phá",
    japanese: "A1丘の要塞を爆薬で攻略する計画を提案した第316師団の指揮官",
    year: "1914 – 1988",
    image: LeQuangBa,
  },
  {
    fullName: "Song Hào",
    description:
      "Cùng Bộ Chỉ huy Đại đoàn 308 chỉ đạo quyết đoán, đúng đắn, sáng tạo, kịp thời trên toàn mặt trận chiến đấu tiêu diệt địch",
    japanese:
      "第308師団の司令部と共に、戦線全体で敵を撃破するために決断力、創造性、タイミングの良さを発揮した指揮官",
    year: "1917 - 2004",
    image: SongHao,
  },
];

export default function Leader2() {
  const language = useSelector((state) => state.language.language);
  const isVietnamese = language == "vi";
  return (
    <section
      id="hero-list"
      className=" bg-primaryBgColor h-[100vh] w-screen overflow-hidden flex flex-col justify-center ml-4"
    >
      {isVietnamese ? (
        <h2 className="text-center text-[30px] text-primaryRed font-bold my-4">
          LÃNH ĐẠO VÀ CHỈ HUY
        </h2>
      ) : (
        <h2 className="text-center text-[30px] text-primaryRed font-bold my-4">
          指導者と指揮官
        </h2>
      )}
      <div style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',  
        width: '100%',
      }}
        className="flex justify-center items-center">
        <Swiper
          slidesPerView={2}
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
          className="w-full"
        >
          {leaders.map((leader, index) => (
            <SwiperSlide key={index} className="bg-center bg-cover w-[600px]">
              <Hero
                fullName={leader.fullName.toUpperCase()}
                description={isVietnamese ? leader.description : leader.japanese}
                year={leader.year}
                image={leader.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
