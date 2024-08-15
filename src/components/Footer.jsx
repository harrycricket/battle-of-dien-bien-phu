import flag from '../assets/flag.png';

const Footer = () => {
  return (
    <footer className='bg-footer'>
      <div className='border-b border-b-secondary pb-8'></div>
      <div className='mt-8 justify-center items-center flex gap-8'>
        <p className='text-primaryTextColor text-center'>
          © Team 5 - VNR202 - FU_HCM - All Rights Reserved
        </p>
        <div className='w-16 flex-none mr-2'>
          <img src={flag} className='w-full' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
