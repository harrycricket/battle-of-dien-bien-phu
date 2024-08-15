import { useDispatch, useSelector } from 'react-redux';
import flag from '../assets/flag.png';
import { useState } from 'react';
import { switchToJapanese, switchToVietnamese } from '../redux/LanguageSlice';

const Navbar = () => {
  const [showTab, setShowTab] = useState(false);
  const [activeTab, setActiveTab] = useState('context');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowTab(false);
  };

  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  return (
    <header className='flex items-center justify-between w-full px-16'>
      <div className='flex justify-center items-center w-96'>
        <a href='#' className='flex-none w-24'>
          <img src={flag} className='w-full' />
        </a>
        <span className='text-2xl font-medium relative p-1'>
          Chiến dịch Điện Biên Phủ
        </span>
      </div>
      <nav
        className={`fixed text-2xl bg-white w-[60%] md:w-[40%] xl:w-full h-full ${
          showTab ? 'left-0' : '-left-full'
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center xl:justify-start xl:ms-[18%] gap-10 transition-all duration-500 z-50`}
      >
        <a
          href='#context'
          className={`${
            activeTab === 'context' ? 'text-primaryTextColor' : ''
          } hover:text-primaryTextColor`}
          onClick={() => handleTabClick('context')}
        >
          Bối cảnh
        </a>
        <a
          href='#battle'
          className={`${
            activeTab === 'battle' ? 'text-primaryTextColor' : ''
          } hover:text-primaryTextColor`}
          onClick={() => handleTabClick('battle')}
        >
          Các trận đánh
        </a>
        <a
          href='#conclusion'
          className={`${
            activeTab === 'conclusion' ? 'text-primaryTextColor' : ''
          } hover:text-primaryTextColor`}
          onClick={() => handleTabClick('conclusion')}
        >
          Tổng kết
        </a>
        <a
          href='#hero'
          className={`${
            activeTab === 'hero' ? 'text-primaryTextColor' : ''
          } hover:text-primaryTextColor`}
          onClick={() => handleTabClick('hero')}
        >
          Các vị anh hùng
        </a>
      </nav>
      <div className='flex gap-4'>
        {language === 'jp' ? (
          <button
            className='px-4 py-2 bg-buttonBgColor text-buttonTextColor rounded-md hover:bg-blue-700 active:scale-95 transition'
            onClick={() => dispatch(switchToVietnamese())}
          >
            Vietnamese
          </button>
        ) : (
          <button
            className='px-4 py-2 bg-buttonBgColor text-buttonTextColor rounded-md hover:bg-blue-700 active:scale-95 transition'
            onClick={() => dispatch(switchToJapanese())}
          >
            Japanese
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
