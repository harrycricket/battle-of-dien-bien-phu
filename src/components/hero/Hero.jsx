import React from 'react';

export default function Hero({ fullName, description, year, image }) {
  return (
    <div className='hero'>
      <div className='border-[6px] border-primaryRed rounded-xl bg-cardBgColor flex flex-col items-center text-center w-[500px] h-[600px] m-auto py-3 px-8'>
        <img src={image} alt={fullName} className='h-[300px] w-[250px] rounded-xl' />
        <div className='profile-details'>
          <h3 className='text-[35px] font-bold mt-4 text-center text-primaryRed'>{fullName}</h3>
          <p className='text-[25px]'>({year})</p>
          <p className='font-semibold text-[25px]'>{description}</p>
        </div>
      </div>
    </div>
  );
}