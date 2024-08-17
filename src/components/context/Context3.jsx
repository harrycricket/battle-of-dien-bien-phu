export default function Context3() {
  return (
    <section id="context" className="h-[100vh] pt-[28px] bg-primaryBgColor relative"
    >
      <h2
        className="context-title w-full text-center"
        style={{
          fontSize: "28px",
          fontWeight: 700,
          lineHeight: 1.4,
          textAlign: "center",
          textTransform: "uppercase",
          textShadow:
            "0.04419417em 0.04419417em 0em rgba(39, 34, 27, 0.400000)",
        }}
      >
        <span className="relative" style={{ color: "#fcde6e" }} >
          BỐI CẢNH&nbsp;
          <span className="absolute -bottom-3 right-[2px] 3xl:right-1 h-[5px] w-[50px] bg-yellow"></span>
        </span>
        <span className="relative">
          LỊCH SỬ
          <span className="absolute -bottom-3 -left-[2px] 3xl:-left-1 h-[5px] w-[50px] bg-black"></span>
        </span>
      </h2>
      <div className="context-content">
        <div className="left-side"
          style={{
            backgroundImage: `url('/images/context/context-nhaydu1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: `left center`,
            backgroundRepeat: 'no-repeat',
          }}>
          <div className="context-content-title">
            <span style={{
              fontSize: "28px"
            }}>20/11/1953</span>
            <br />
            <span style={{
              display: "inline-block",
              fontSize: "24px",
              marginTop: "4px"
            }}
              className="uppercase">BỘ CHỈ HUY QUÂN VIỄN CHINH PHÁP ĐÃ<br />
              CHO QUÂN NHẢY DÙ CHIẾM ĐIỆN BIÊN PHỦ</span>
          </div>
        </div>
        <div className="right-side pt-[100px]" style={{
          top: '10vh',
          left: '-240px'
        }}>
          <div className="absolute w-full h-fit">
            <img
              src="/images/context/context-nhaydu2.jpg"
              alt="Description of image"
              style={{
                height: '320px',
                objectFit: 'contain',
                objectPosition: 'left top'
              }}
            />
            <div className="context-content-detail absolute -top-[28px] -right-[32px] max-w-[540px]"
              style={{ background: 'rgba(252, 222, 110, 0.82)', padding: '20px 32px', }}>
              <span style={{
                fontSize: "14px",
              }}>CỤC DIỆN CHIẾN SỰ CÓ MỘT SỰ BIẾN CHUYỂN MỚI</span>
              <br />
              <span style={{
                display: "inline-block",
                fontSize: "14px",
                fontWeight: 400,
                marginTop: "4px",
                fontStyle: 'italic',

              }}
              >vào thời điểm các cuộc tiến công Đông - Xuân của ta chuẩn bị bắt đầu và liên tiếp giành thắng lợi</span>
            </div>

            <div className="context-content-detail absolute -bottom-[-28px] -right-[52px] max-w-[540px]"
              style={{ background: 'rgba(252, 222, 110, 0.82)', padding: '20px 32px', }}>
              <span style={{
                fontSize: "14px",
              }}>ĐỊCH PHÁT HIỆN SỰ DI CHUYỂN CỦA MỘT BỘ PHẬN CHỦ LỰC TA LÊN HƯỚNG TÂY BẮC</span>
              <br />
              <span style={{
                display: "inline-block",
                fontSize: "14px",
                fontWeight: 400,
                marginTop: "4px",
                fontStyle: 'italic',

              }}
              >địch quyết định dùng một bộ phận lực lượng cơ động, nhảy dù đánh chiếm Điện Biên Phủ</span>
            </div>
          </div>
        </div>
      </div>

    </section >
  );
}
