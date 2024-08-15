import flag from '../assets/flag.png';
import { useState } from 'react';

const Navbar = () => {
  const [showTab, setShowTab] = useState(false);
  const [activeTab, setActiveTab] = useState('context');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowTab(false);
  };

  return (
    <header className='flex items-center justify-between w-full'>
      <div className='flex justify-center items-center w-1/3'>
        <a href='#' className='flex-none w-24'>
          <img src={flag} className='w-full' />
        </a>
        <span className='text-2xl font-medium relative p-1'>
          Chiến dịch Điện Biên Phủ
        </span>
      </div>
      {/* <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
        <div className='container px-4 mx-auto relative lg:text-sm'>
          <div className='flex justify-between items-center'>
            <ul className='hidden lg:flex ml-14 space-x-12'>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav> */}
      <nav
        className={`fixed text-2xl bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
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
    </header>
  );
};

export default Navbar;
