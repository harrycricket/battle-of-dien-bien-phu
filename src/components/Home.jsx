import React from 'react';
import ReactPlayer from 'react-player';

const Home = () => {

  return (
    <section
      id='home'
      className='min-h-[100vh] bg-PrimaryBgTien flex items-end justify-center relative'
      style={{
        backgroundImage: `url('/fight.png')`,
        backgroundSize: '50% 100%', // Cover 50% of the width and 100% of the height
        backgroundPosition: 'left top', // Align the image to the left
        backgroundRepeat: 'no-repeat'  // Prevents the image from repeating
      }}
    >
      <div className='absolute top-2 left-[50.75%] 3xl:left-[51.2%] transform -translate-x-1/2'>
        <h1 className="text-xl 3xl:text-[30px] font-semibold mb-6">
          <span className="text-white relative">
            CHIẾN DỊCH&nbsp;
            <span className="absolute -bottom-1 right-[2px] 3xl:right-1 h-[2.5px] w-[40px] bg-yellow"></span>
          </span>
          <span className="text-black relative">
            ĐIỆN BIÊN PHỦ
            <span className="absolute -bottom-1 -left-[2px] 3xl:-left-1 h-[2.5px] w-[40px] bg-black"></span>
          </span>
        </h1>
      </div>

      <div className='absolute top-[5vh] right-[10vw]'>
        <h1 className="font-semibold mb-6">
          <span className="text-black text-base 3xl:text-2xl ps-1 font-extrabold vertical-text relative">
            ĐIỆN BIÊN PHỦ
          </span>
          <span className="text-black text-[90px] 3xl:text-[120px] leading-[90px] font-extrabold vertical-text relative">
            1954
          </span>
        </h1>
      </div>

      <div className='absolute top-[33vh] right-[10.49vw] 3xl:right-[9.8vw] 3xl:top-[35vh]'>
        <img
          src="fight-bw.png"
          className="w-32 h-32 3xl:w-36 3xl:h-36 max-w-md mx-auto"
        />
      </div>

      <div className='absolute top-[28vh] left-[21vw] 3xl:left-[16vw]'>
        <h1 className="text-white text-[50px] 3xl:text-[80px] font-extrabold mb-6" style={{ position: 'relative', top: '50px', left: '20px' }}>
          CHIẾN DỊCH<br /> ĐIỆN BIÊN PHỦ
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-end justify-center w-full ms-[90px]">
        <div className="flex-1 mb-16 text-white h-full text-center md:text-left">
          <div className='ms-10'>
            <div className="text-2xl font-extrabold">ĐIỆN BIÊN PHỦ</div>
            <div className="text-3xl font-extrabold">13/3/1954</div>
            <div className="text-5xl font-extrabold leading-[50px]">7/5/1954</div>
          </div>
        </div>
        <div className="flex-1 h-full object-center">
          <div className="flex-1 h-full object-center">
            <img
              src="fist.png"
              alt="Fist"
              className="max-h-[100vh] mx-auto object-contain"
            />
          </div>

        </div>
        <div className="flex-1 text-black bg-yellow p-6 pt-12 rounded-lg shadow-lg">
          <div className="absolute bottom-44 3xl:bottom-52 right-0 flex w-auto justify-end gap-4">
            <div className="w-[200px] h-[100px] 3xl:w-[270px] 3xl:h-[150px] overflow-hidden rounded-md">
              <ReactPlayer
                url="70Y-DienBienPhu.mp4"
                controls
                width="100%"
                height="100%"
                style={{ borderRadius: '8px' }}  // Ensures the video fits within the rounded corners
              />
            </div>
            <img
              src="win.jpg"
              alt="Image 1"
              className="w-[200px] h-[100px] 3xl:w-[250px] 3xl:h-[150px] object-cover rounded-md"
              style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
            />
          </div>


          <h2 className="text-2xl 3xl:text-3xl font-bold mb-1">CHIẾN DỊCH ĐIỆN BIÊN PHỦ</h2>
          <p className='text-base 3xl:text-xl'>
            Đây là chiến thắng quân sự lớn nhất trong cuộc Chiến tranh Đông Dương (1945 – 1954) của Việt Nam.
            Với thắng lợi quyết định này, lực lượng Quân đội Nhân dân Việt Nam do Đại tướng Võ Nguyên Giáp chỉ huy
            đã buộc quân Pháp và chính quyền Quốc Gia Việt Nam tại Điện Biên Phủ phải đầu hàng vào ngày 7 tháng 5 năm
            1954, sau suốt 2 tháng cầm cự.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
