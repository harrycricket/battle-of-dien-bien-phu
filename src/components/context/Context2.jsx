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
            backgroundImage: `url('/images/context/context-nava.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: `left center`,
            backgroundRepeat: 'no-repeat',
          }}>
          <div className="context-content-title">
            <span style={{
              fontSize: "28px"
            }}>07/1953</span>
            <br />
            <span style={{
              display: "inline-block",
              fontSize: "24px",
              marginTop: "4px"
            }}
              className="uppercase">Thực dân Pháp và can thiệp Mỹ <br />
              đã cho ra đời Kế hoạch Nava</span>
          </div>
        </div>
        <div className="right-side pt-[100px]">
          <section className="space-y-9 bg-yellow-50 font-sans mt-4 pr-8">
            <div className="bg-yellow-500 text-black p-6 rounded-md shadow-md" style={{ backgroundColor: 'rgba(252, 222, 110, 0.6)' }}>
              <h2 className="text-lg font-bold mb-4">TẬP TRUNG BINH LỰC, &quot;QUẢ ĐẤM THÉP&quot; QUYẾT CHIẾN VỚI VIỆT MINH</h2>
              <ul className="list-disc pl-6 space-y-2 italic">
                <li>Tăng viện lớn về binh lực và chi phí chiến tranh</li>
                <li>Pháp và Mỹ lập kế hoạch đến năm 1954 quân chủ lực Pháp  có 7 sư đoàn <br />  cơ động chiến lược với 27 binh đoàn làm nắm đấm thép</li>
              </ul>
            </div>

            <div className="bg-yellow-300 text-black p-6 rounded-md shadow-md" style={{ backgroundColor: 'rgba(252, 222, 110, 0.6)' }}>
              <h2 className="text-lg font-bold mb-4">MƯU TOAN TRONG VÒNG 18 THÁNG</h2>
              <ul className="list-disc pl-6 space-y-2 italic">
                <li>sẽ tiêu diệt phần lớn bộ đội chủ lực của ta, kiểm soát lãnh thổ Việt Nam <br />và bình định cả Nam Đông Dương.</li>
              </ul>
            </div>

            <div className="bg-yellow-500 text-black p-6 rounded-md shadow-md" style={{ backgroundColor: 'rgba(252, 222, 110, 0.6)' }}>
              <h2 className="text-lg font-bold mb-4">LÀ NỖ LỰC CUỐI CÙNG CỦA THỰC DÂN PHÁP VÀ CAN THIỆP MỸ</h2>
              <ul className="list-disc pl-6 space-y-2 italic">
                <li>nhằm giành lại thế chủ động có tính quyết định về quân sự trên chiến trường</li>
                <li>làm cơ sở cho một giải pháp chính trị có lợi cho chúng</li>
              </ul>
            </div>

          </section>
        </div>
      </div>

    </section >
  );
}
