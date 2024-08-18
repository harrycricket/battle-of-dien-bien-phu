import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// import required modules
import {
  EffectCoverflow, Pagination, Keyboard, Autoplay
} from "swiper/modules";
import Hero from "./Hero";
import Trancan from "../../assets/heroes/Trancan.jpg";
import BeVanDan from "../../assets/heroes/BeVanDan.jpeg";
import ToVinhDien from "../../assets/heroes/ToVinhDien.jpeg";
import PhanDinhGiot from "../../assets/heroes/PhanDinhGiot.jpeg";
import HoangVanNo from "../../assets/heroes/HoangVanNo.jpg";
import DuongQuangChau from "../../assets/heroes/DuongQuangChau.jpg";
import HoangKhacDuoc from "../../assets/heroes/HoangKhacDuoc.jpg";
import BuiDinhCu from "../../assets/heroes/BuiDinhCu.jpg";
import DangDinhHo from "../../assets/heroes/DangDinhHo.jpg";
import PhungVanKhau from "../../assets/heroes/PhungVanKhau.jpg";
import ChuVanKham from "../../assets/heroes/ChuVanKham.jpg";
import TaQuocLuat from "../../assets/heroes/TaQuocLuat.jpg";
import TranDinhHung from "../../assets/heroes/TranDinhHung.jpg";
import DinhVanMau from "../../assets/heroes/DinhVanMau.jpg";
import ChuVanMui from "../../assets/heroes/ChuVanMui.jpeg";
import DangDucSong from "../../assets/heroes/DangDucSong.png";
import PhanTu from "../../assets/heroes/PhanTu.jpg";
import NguyenVanThuan from "../../assets/heroes/NguyenVanThuan.jpg";
import LamVietHuu from "../../assets/heroes/LamVietHuu.png";
import LeVanDy from "../../assets/heroes/LeVanDy.jpeg";



const heroes = [
  {
    fullName: "TRẦN CAN",
    description:
      "NGƯỜI CẮM LÁ CỜ CHIẾN THẮNG ĐẦU TIÊN Ở CHIẾN DỊCH ĐIỆN BIÊN PHỦ",
    year: "1931 - 1954",
    image: Trancan,
  },
  {
    fullName: "Bế Văn Đàn",
    description: "ANH HÙNG LẤY VAI LÀM GIÁ SÚNG",
    year: "1930-1953",
    image: BeVanDan,
  },
  {
    fullName: "TÔ VĨNH DIỆN",
    description: "ANH HÙNG LẤY THÂN MÌNH CHẮN PHÁO",
    year: "1924 – 1954",
    image: ToVinhDien,
  },
  {
    fullName: "Hoàng Văn Nô",
    description: "ANH HÙNG Dùng lưỡi lê tiêu diệt 5 tên lính Pháp",
    year: "1932 - 1954",
    image: HoangVanNo,
  },
  {
    fullName: "Phan Đình Giót",
    description: "anh hùng Lấy thân mình lấp lỗ châu mai",
    year: "1922 - 1954",
    image: PhanDinhGiot,
  },
  {
    fullName: "Dương Quảng Châu",
    description:
      "Chiến sĩ quân báo, đồng chí luôn nêu cao tinh thần dũng cảm, mưu trí, linh hoạt",
    year: "1929",
    image: DuongQuangChau,
  },
  {
    fullName: "Hoàng Khắc Dược",
    description:
      "“Anh nuôi” hết lòng chăm lo, nuôi dưỡng chu đáo cho các chiến sĩ ta để yên tâm ra trận",
    year: "1917",
    image: HoangKhacDuoc,
  },
  {
    fullName: "Phùng Văn Khầu",
    description:
      "Anh hùng Tiêu diệt lô cốt địch tại đồi E1, chiếm giữ điểm cao để yểm trợ các mũi tấn công của bộ binh",
    year: "1930 - 2021",
    image: PhungVanKhau,
  },
  {
    fullName: "Bùi Đình Cư",
    description:
      "Anh hùng pháo binh, tiên phong tạo điều kiện cho xung kích diệt đồn địch",
    year: "1927 - 1988",
    image: BuiDinhCu,
  },
  {
    fullName: "Đặng Đình Hồ",
    description: "Anh hùng Tạo trận địa liên hoàn siết chặt quanh Hồng Cúm",
    year: "1925",
    image: DangDinhHo,
  },
  {
    fullName: "Tạ Quốc Luật",
    description:
      "Đại đội trưởng dẫn đầu tổ xung kích chỉ huy bắt sống tướng giặc Decastres",
    year: "1925 – 1985",
    image: TaQuocLuat,
  },
  // Sửa
  {
    fullName: "Trần Đình Hùng",
    description: "Chỉ huy trung đội ĐKZ đánh tan nhiều cứ điểm quan trọng",
    year: "1928 - 2023",
    image: TranDinhHung,
  },
  {
    fullName: "Chu Văn Khâm",
    description:
      "Anh hùng Phá cầu, chặn đường tiếp viện của địch, làm đường, chở phà cho bộ đội hành quân, phá bom bảo đảm giao thông vận tải",
    year: "1925",
    image: ChuVanKham,
  },
  {
    fullName: "Chu Văn Mùi",
    description:
      "Người Phụ trách máy vô tuyến điện, phối hợp với đơn vị bạn phòng ngự trên Đồi A1 và cứ điểm 311B",
    year: "1929",
    image: ChuVanMui,
  },
  {
    fullName: "Đinh Văn Mẫu",
    description:
      "Tích cực đi lấy măng, đào củ, hái rau rừng, để cải thiện bữa ăn, bảo đảm sức khỏe cho bộ đội",
    year: "1924",
    image: DinhVanMau,
  },
  {
    fullName: "Đặng Đức Song",
    description:
      "Anh hùng liên tiếp đánh lui 2 đợt tấn công của địch trong trận phòng ngự Đồi Xanh",
    year: "1934 - 2023",
    image: DangDucSong,
  },
  {
    fullName: "Phan Tư",
    description: "Anh hùng phá bom và phá thác trên sông Nậm Na",
    year: "1931",
    image: PhanTu,
  },
  {
    fullName: "Nguyễn Văn Thuần",
    description:
      "Làm đường cho pháo cơ động và xe kéo pháo được tiến hành khẩn trương trong điều kiện không có máy ủi, không được dùng thuốc nổ.",
    year: "1916 - 1979",
    image: NguyenVanThuan,
  },
  {
    fullName: "Lê Văn Dỵ",
    description:
      "Chỉ huy Đại đội 811 lên đồi C1 độc lập phòng ngự và tấn công tiêu diệt đồi C1",
    year: "1926 - 1970",
    image: LeVanDy,
  },
  {
    fullName: "Lâm Viết Hữu",
    description:
      "Chia cắt địch, tạo điều kiện cho Tiểu đoàn 249 chủ công đánh chiếm khu vực đỉnh đồi",
    year: "1926 - 2011",
    image: LamVietHuu,
  },
];

export default function HeroList() {
  return (
    <section
      id="hero-list"
      className=" bg-primaryBgColor h-[100vh] w-screen overflow-hidden flex flex-col justify-center"
    >
      {/* Những anh hùng tiêu biểu */}
      <h2 className="text-center text-[50px] text-primaryRed font-bold my-4">
        NHỮNG ANH HÙNG TIÊU BIỂU KHÁC
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Keyboard, Autoplay]}
        className="w-full py-12 mySwiper"
      >
        {heroes.map((hero, index) => (
          <SwiperSlide key={index} className="bg-center bg-cover w-[600px]">
            <Hero
              fullName={hero.fullName.toUpperCase()}
              description={hero.description.toUpperCase()}
              year={hero.year}
              image={hero.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
