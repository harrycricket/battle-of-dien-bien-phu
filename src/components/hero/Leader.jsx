import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
import VNG from "../../assets/heroes/VNG.png";
import HeroBg from "../../assets/heroes/HeroBg.png";

export default function Leader() {
  return (
    <section
      id="leader"
      className=" bg-primaryBgColor h-[100vh] w-screen overflow-hidden pb-11"
    >
      <h2 className="text-center text-[50px] text-primaryRed font-bold my-4">
        LÃNH ĐẠO VÀ CHỈ HUY
      </h2>

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
            <div className="p-32">
              <div className="text-[100px] mb-4" data-swiper-parallax="-500">
                Chủ tịch
              </div>
              <div
                className="text-[150px] font-bold mb-4 text-yellowText"
                data-swiper-parallax="-200"
              >
                HỒ CHÍ MINH
              </div>
              <div
                className="text-[40px] italic mb-4"
                data-swiper-parallax="-200"
              >
                (1890 - 1969)
              </div>
              <div className="text-[40px] w-2/3 " data-swiper-parallax="-300">
                <p className="leading-relaxed">
                  Chủ tịch Hồ Chí Minh đóng vai trò quan trọng trong việc định
                  hướng và lãnh đạo toàn bộ cuộc kháng chiến chống Pháp, đặc
                  biệt là trong chiến dịch Điện Biên Phủ. Người đưa ra tầm nhìn
                  chiến lược với phương châm “đánh ăn chắc, tiến ăn chắc,” đảm
                  bảo mỗi bước tiến của quân đội đều được chuẩn bị kỹ lưỡng để
                  giành thắng lợi. Hồ Chí Minh không chỉ tập trung vào chiến
                  lược quân sự, mà còn khéo léo tận dụng các mối quan hệ quốc
                  tế, đặc biệt là sự ủng hộ từ Liên Xô và Trung Quốc, nhằm tạo
                  ra ưu thế trên bàn đàm phán và trong chiến trường. Tầm nhìn
                  của Người đã tạo nền tảng cho các quyết định quân sự cụ thể và
                  đóng góp quan trọng vào thành công lịch sử của chiến dịch Điện
                  Biên Phủ.
                </p>
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
        <SwiperSlide>
          <div className="relative h-full">
            <div className="p-28">
              <div className="text-[100px]" data-swiper-parallax="-500">
                Đại tướng, Tổng Tư lệnh
              </div>
              <div
                className="text-[140px] font-bold mb-4 text-yellowText"
                data-swiper-parallax="-200"
              >
                VÕ NGUYÊN GIÁP
              </div>
              <div
                className="text-[35px] italic mb-4"
                data-swiper-parallax="-200"
              >
                (1911-2013)
              </div>
              <div className="text-[40px] w-2/3 " data-swiper-parallax="-300">
                <p className="leading-relaxed">
                  Đại tướng Võ Nguyên Giáp là người trực tiếp chỉ huy chiến dịch
                  Điện Biên Phủ, một trong những trận đánh quyết định của cuộc
                  kháng chiến chống Pháp. Ông nổi bật với khả năng điều chỉnh
                  chiến lược linh hoạt, từ kế hoạch "đánh nhanh, thắng nhanh"
                  ban đầu sang "đánh chắc, tiến chắc," quyết định này đã đóng
                  góp quan trọng vào chiến thắng của quân đội Việt Nam. Võ
                  Nguyên Giáp không chỉ là một nhà chỉ huy tài ba trên chiến
                  trường, mà còn được quốc tế công nhận là một trong những chiến
                  lược gia quân sự xuất sắc nhất thế kỷ 20. Tài năng và sự nhạy
                  bén của ông trong việc ứng biến chiến lược đã đưa quân đội
                  Việt Nam từ thế yếu thành thế mạnh, tạo nên chiến thắng Điện
                  Biên Phủ lẫy lừng, buộc Pháp phải ký kết Hiệp định Genève và
                  chấm dứt sự cai trị thực dân tại Đông Dương.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 h-full">
              <img
                src={VNG}
                alt="VoNguyenGiap"
                className="h-full object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
