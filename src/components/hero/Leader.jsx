import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// import required modules
import {
  Pagination,
  Parallax,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

import HoChiMinh from "../../assets/heroes/HoChiMinh.png";
import HeroBg from "../../assets/heroes/HeroBg.png";

export default function Leader() {
  const language = useSelector((state) => state.language.language);
  const isVietnamese = language == "vi";
  return (
    <section
      id="leader"
      className=" bg-primaryBgColor h-[100vh] w-screen overflow-hidden pb-11"
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

      <Swiper
        speed={600}
        keyboard={{
          enabled: true,
        }}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        mousewheel={true}
        modules={[Mousewheel, Parallax, Pagination, Navigation, Keyboard]}
        className="relative h-[100vh] bg-gray-100 text-white"
      >
        <div
          slot="container-start"
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${HeroBg})`,
          }}
        ></div>
        <SwiperSlide>
          <div className="relative h-full">
            <div className="px-24 py-10">
              {isVietnamese ? (
                <div className="text-[70px]" data-swiper-parallax="-500">
                  Chủ tịch
                </div>
              ) : (
                <div className="text-[70px]" data-swiper-parallax="-500">
                  国家主席
                </div>
              )}

              <div
                className="text-[80px] font-bold mb-4 text-yellowText"
                data-swiper-parallax="-200"
              >
                HỒ CHÍ MINH
              </div>
              <div
                className="text-[23px] italic mb-4"
                data-swiper-parallax="-200"
              >
                (19/05/1890 - 02/09/1969)
              </div>
              <div className="text-[20px] w-2/3 " data-swiper-parallax="-300">
                {isVietnamese ? (
                  <p className="leading-relaxed">
                    Chủ tịch Hồ Chí Minh đóng vai trò quan trọng trong việc định
                    hướng và lãnh đạo toàn bộ cuộc kháng chiến chống Pháp, đặc
                    biệt là trong chiến dịch Điện Biên Phủ. Người đưa ra tầm
                    nhìn chiến lược với phương châm “đánh ăn chắc, tiến ăn
                    chắc,” đảm bảo mỗi bước tiến của quân đội đều được chuẩn bị
                    kỹ lưỡng để giành thắng lợi. Hồ Chí Minh không chỉ tập trung
                    vào chiến lược quân sự, mà còn khéo léo tận dụng các mối
                    quan hệ quốc tế, đặc biệt là sự ủng hộ từ Liên Xô và Trung
                    Quốc, nhằm tạo ra ưu thế trên bàn đàm phán và trong chiến
                    trường. Tầm nhìn của Người đã tạo nền tảng cho các quyết
                    định quân sự cụ thể và đóng góp quan trọng vào thành công
                    lịch sử của chiến dịch Điện Biên Phủ.
                  </p>
                ) : (
                  <p className="leading-relaxed">
                    ホー・チ・ミン主席は、フランスとの抗戦、特にディエンビエンフー作戦において、全体の方向性を定め、指導する上で重要な役割を果たしました。彼は「確実に勝利し、確実に前進する」という戦略的ビジョンを掲げ、軍隊の各ステップが勝利を収めるために慎重に準備されていることを保証しました。ホー・チ・ミン主席は軍事戦略にのみ焦点を当てるのではなく、国際的な関係、特にソビエト連邦と中国の支援を巧みに活用し、交渉テーブルと戦場の両方で優位性を築きました。彼のビジョンは、具体的な軍事決定の基盤を築き、ディエンビエンフー作戦の歴史的な成功に重要な貢献をしました。
                  </p>
                )}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 h-full">
              <img
                src={HoChiMinh}
                alt="HoChiMinh"
                className="h-full object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
